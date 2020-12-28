const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressionSession  = require('express-session');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

// express와 next 연결
const app = next({ dev });
const handle = app.getRequestHandler(); // get요청 처리기
dotenv.config();

app.prepare().then(() => {
    const server = express();

    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(expressionSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        }
    }));

    server.get('/hashtag/:tag', (req, res) => {
        return app.render(req, res, '/hashtag', { tag: req.params.tag }); // 실제로 보여줄 페이지는 pages의 hashtag.js 페이지 // { tag: req.params.tag } 부분은 query
    });

    server.get('/user/:id', (req, res) => {
        return app.render(req, res, '/user', { id: req.params.id });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3060, () => {
        console.log('next+express server is running on http://localhost:3060');
    });
});
