const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');

const router = express.Router();

// API: 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
router.get('/', (req, res) => {
    if (!req.user) {
        return res.status(401).send('로그인이 필요합니다.');
    }
    const user = Object.assign({}, req.user.toJSON());
    delete user.password;
    return res.json(user);
});
router.post('/', async (req, res, next) => { // 회원가입
    try {
        const exUser = await db.User.findOne({
            where: {
                userId: req.body.userId, // req.body === front/sagas/user.js에서 요청한 signUpData
            },
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await db.User.create({
            userId: req.body.userId,
            password: hashedPassword,
            nickname: req.body.nickname,
        });
        return res.status(200).json(newUser);
    } 
    catch (e) {
        console.error(e);
        // 에러 처리를 여기서
        // return res.status(403).send(e);
        return next(e);
    }
});
router.get('/:id', (req, res) => { // 남의 정보 가져오는 것 // :id는 req.params.id로 가져올 수 있음

});
router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
});
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => { // passport/local.js에서 done(null, user, { reason: })이 여기에 (err, user, info)로 이어짐
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => { // req.login 성공시 passport.serializeUser 실행됨
            try {
                if (loginErr) {
                    return next(loginErr);
                }
                const fullUser = await db.User.findOne({
                    where: { id: user.id },
                    include: [{
                        model: db.Post,
                        as: 'Posts',
                        attributes: ['id'], // 개수 세기 위함
                    }, {
                        model: db.User,
                        as: 'Followings',
                        attributes: ['id'], // 개수 세기 위함
                    }, {
                        model: db.User,
                        as: 'Followers',
                        attributes: ['id'], // 개수 세기 위함
                    }],
                    attributes: ['id', 'nickname', 'userId'],
                });
                console.log(fullUser);
                return res.json(fullUser);
            } catch (e) {
                next(e);
            }
        });
    })(req, res, next);
});
router.get('/:id/follow', (req, res) => {

});
router.post('/:id/follow', (req, res) => {

});
router.delete('/:id/follow', (req, res) => {

});
router.delete('/:id/follower', (req, res) => {

});
router.get('/:id/posts', (req, res) => {

});

module.exports = router;
