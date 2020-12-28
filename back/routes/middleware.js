exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) { // req.user가 있는지 판단
        next(); // 다음 미들웨어로 넘어감
    } else {
        return res.status(401).send('로그인이 필요합니다.');
    }
}

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        return res.status(401).send('로그인한 사용자는 접근할 수 없습니다.');
    }
}