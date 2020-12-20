const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const passportConfig = require('./passport');

const db = require('./models');
const userAPIRouter = require('./routes/user');
const postsAPIRouter = require('./routes/posts');
const postAPIRouter = require('./routes/post');

dotenv.config(); // process.env로 접근
const app = express();
db.sequelize.sync();
passportConfig();

app.use(morgan('dev')); // 로그 기록

// req.body 사용
app.use(express.json()); // json 형식의 본문 처리
app.use(express.urlencoded({ extended: true })); // form으로 넘어온 데이터 처리

app.use(cors({
    // cookie 주고받기 가능(서버)
    origin: true,
    credentials: true,
}));

// 사용자 정보는 서버의 세션에, 프론트에는 세션을 조회할 수 있는 쿠키를 전달
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false, // resave: 매번 세션 강제 저장
    saveUninitialized: false, // saveUninitialized: 빈 값도 저장
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true, // httpOnly: 자바스크립트로 쿠키에 접근 불가
        secure: false, // https: https를 쓸 때 true
    },
    name: 'rnbck', // connect.sid 대신
}));

app.use(passport.initialize());
app.use(passport.session()); // passport.session()이 내부적으로 expressSession을 사용. 미들웨어간에 서로 의존 관계가 있는 경우 순서가 중요

app.use('/api/user', userAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/post', postAPIRouter);

app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
});