const { hash } = require('bcrypt');
const express = require('express');
const db = require('../models');
const multer = require('multer');
const path = require('path');

const { isLoggedIn } = require('./middleware');

const router = express.Router();

// 파일 업로드 시 multer 미들웨어 사용. 옵션 설정 필수
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) { // 어떤 폴더에 저장할지
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // 확장자 추출
            const basename = path.basename(file.originalname, ext); // 확장자를 제외한 파일 이름
            done(null, basename + new Date().valueOf() + ext);
        }

    }),
    limits: { fileSize: 20 * 1024 * 1024 },
});

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { // 이미지 주소들이 존재하는데 이는 텍스트로 존재함 -> upload.none()
    // 폼데이터 파일 -> req.file(s)
    // 폼데이터 일반 값 -> req.body
    try {
        const hashtags = req.body.content.match(/#[^\s]+/g); // hashtag 추출 // 정규표현식: regexr.com
        const newPost = await db.Post.create({
            content: req.body.content,
            UserId: req.user.id,
        })
        if (hashtags) {
            const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({
                where: {
                    name: tag.slice(1).toLowerCase()
                },
            })));
            await newPost.addHashtags(result.map(r => r[0])); // result는 2차원 배열
        }
        if (req.body.image) { 
            if (Array.isArray(req.body.image)) { // 이미지 주소를 여러개 올리면 image: [주소1, 주소2]
                const images = await Promise.all(req.body.image.map((image) => {
                    return db.Image.create({ src: image });
                }));
                await newPost.addImages(images);
            } else { // 이미지를 하나만 올리면 image: 주소1
                const image = await db.Image.create({ src: req.body.image });
                await newPost.addImage(image);
            }
        }
        // const User = await newPost.getUser();
        // newPost.User = User;
        // res.json(newPost);
        const fullPost = await db.Post.findOne({
            where: { id: newPost.id },
            include: [{
                model: db.User,
            }, {
                model: db.Image,
            }],
        });
        res.json(fullPost);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/images', upload.array('image'), async (req, res) => { // 'image'는 PostForm의 formData의 'image'의 이름과 같아야함 // array는 여러개, single은 하나
    res.json(req.files.map(v => v.filename));
});

router.get('/:id/comments', async (req, res, next) => {
    try {
        const post = await db.Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }

        const comments = await db.Comment.findAll({
            where: {
                PostId: req.params.id,
            },
            order: [['createdAt', 'ASC']],
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }],
        });
        return res.json(comments);
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

router.post('/:id/comment', isLoggedIn, async (req, res, next) => {
    try {
        const post = await db.Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        const newComment = await db.Comment.create({
            PostId: post.id,
            UserId: req.user.id,
            content: req.body.content,
        });
        await post.addComment(newComment.id); // db.Post와 db.Comment 연결
        
        const comment = await db.Comment.findOne({
            where: {
                id: newComment.id,
            },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }],
        })
        return res.json(comment);
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

router.post('/:id/like', isLoggedIn, async (req, res, next) => { 
    try {
        const post = await db.Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }

        await post.addLikers(req.user.id);
        res.json({ userId: req.user.id });
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.delete('/:id/like', isLoggedIn, async (req, res, next) => { 
    try {
        const post = await db.Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }

        await post.removeLikers(req.user.id);
        res.json({ userId: req.user.id });
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/:id/retweet', isLoggedIn, async (req, res, next) => { 
    try {
        const post = await db.Post.findOne({ 
            where: { id: req.params.id },
            include: [{
                model: db.Post,
                as: 'Retweet',
            }]
         });
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        
        if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
            return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
        }
        const retweetTargetId = post.RetweetId || post.id; // post.RetweetId: retweet된 게시글을 다시 retweet하는 경우, post.id: 원본 게시글을 retweet하는 경우
        const exPost = await db.Post.findOne({
            where: {
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            }
        });
        if (exPost) {
            return res.status(403).send('이미 리트윗했습니다.');
        }

        const retweet = await db.Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content: 'retweet',
        });
        const retweetWithPrevPost = await db.Post.findOne({
            where: { id: retweet.id },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.Post,
                as: 'Retweet',
                include: [{
                    model: db.User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: db.Image,
                }]
            }]
        });
        res.json(retweetWithPrevPost);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;