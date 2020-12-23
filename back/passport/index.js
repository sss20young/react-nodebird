const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {
    passport.serializeUser((user, done) => { // 서버쪽에 [{ id: 3, cookie: 'asdfgh' }] 저장 // serializeUser: 프론트에서 서버로 쿠키 보내면 id 값 추출
        return done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => { // deserializeUser: 서버에서 id를 통해 DB 정보 추출
        try {
            const user = await db.User.findOne({
                where: { id },
            });
            return done(null, user); // req.user에 저장됨
        } catch (e) {
            console.error(e);
            return done(e);
        }
    });
    
    local();
};

// 프론트에서 서버로는 cookie만 보냄(asdfgh)
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키 검사 후 id: 3 발견
// id: 3이 deserializeUser에 들어감
// req.user로 사용자 정보가 들어감

// deserializeUser는 요청 보낼때마다 실행됨(db 요청 1번씩 실행)
// 실무에서는 deserializeUser 결과물 캐싱