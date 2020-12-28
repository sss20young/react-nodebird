import { all, takeLatest, takeEvery, fork, call, put, take, delay } from 'redux-saga/effects';
import { 
    LOG_IN_REQUEST, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE, 
    SIGN_UP_REQUEST, 
    SIGN_UP_SUCCESS, 
    SIGN_UP_FAILURE, 
    LOG_OUT_REQUEST, 
    LOG_OUT_SUCCESS, 
    LOG_OUT_FAILURE, 
    LOAD_USER_REQUEST, 
    LOAD_USER_SUCCESS, 
    LOAD_USER_FAILURE, 
    FOLLOW_USER_REQUEST, 
    FOLLOW_USER_FAILURE, 
    FOLLOW_USER_SUCCESS, 
    UNFOLLOW_USER_REQUEST, 
    UNFOLLOW_USER_SUCCESS, 
    UNFOLLOW_USER_FAILURE,
    LOAD_FOLLOWINGS_REQUEST,
    LOAD_FOLLOWINGS_SUCCESS,
    LOAD_FOLLOWINGS_FAILURE,
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWERS_SUCCESS,
    LOAD_FOLLOWERS_FAILURE,
    REMOVE_FOLLOWER_REQUEST,
    REMOVE_FOLLOWER_SUCCESS,
    REMOVE_FOLLOWER_FAILURE,
 } from '../reducers/user';
import axios from 'axios';

function loginAPI(loginData) {
    // 서버에 요청을 보내는 부분
    return axios.post('/user/login', loginData, {
        withCredentials: true, // cookie 주고받기 가능(프론트)
    });
}

function* login(action) {
    try {
        const result = yield call(loginAPI, action.data);
        yield put({ // put은 dispatch와 동일
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        });
    }
}

// function* watchLogin() {
//     while (true) {
//         yield take(LOG_IN);
//         yield put({
//             type: LOG_IN_SUCCESS,
//         });
//     }
// }

function* watchLogin() {
    // yield takeEvery(LOG_IN_REQUEST, login); // 모든 요청이 유효할 때

    yield takeLatest(LOG_IN_REQUEST, login); // takeLatest는 LOG_IN 액션이 dispatch되길 기다려서 dispatch될 때 login 제너레이터를 호출 + 여러번 action일 때 마지막 action만 받아 처리함
    // 이전 요청이 끝나지 않은게 있다면 이전 요청을 취소함
}

function logoutAPI() {
    return axios.post('/user/logout', {}, {
        withCredentials: true,
    });
}

function* logout() {
    try {
        yield call(logoutAPI);
        yield put({ 
            type: LOG_OUT_SUCCESS
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOG_OUT_FAILURE,
            error: e,
        })
    }
}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}

function loadUserAPI(userId) {
    return axios.get(userId ? `/user/${userId}` : '/user', { // 남의 정보(userId) 불러오기 또는 내 정보 불러오기
        withCredentials: true,
    });
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put({ 
            type: LOAD_USER_SUCCESS,
            data: result.data,
            me: !action.data, // userId가 없으면 내 정보 불러오기
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_USER_FAILURE,
            error: e,
        })
    }
}

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function signUpAPI(signUpData) { // signUpData는 action.data
    // 서버에 요청을 보내는 부분
    return axios.post('/user', signUpData);
}

function* signUp(action) { // action은 SIGN_UP_REQUEST의 action
    try {
        yield call(signUpAPI, action.data);
        yield put({ 
            type: SIGN_UP_SUCCESS
        });
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        })
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function followAPI(userId) {
    return axios.post(`/user/${userId}/follow`, {}, {
        withCredentials: true,
    });
}

function* follow(action) {
    try {
        yield call(followAPI, action.data);
        yield put({ 
            type: FOLLOW_USER_SUCCESS,
            data: action.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: FOLLOW_USER_FAILURE,
            error: e,
        })
    }
}

function* watchFollow() {
    yield takeLatest(FOLLOW_USER_REQUEST, follow);
}

function unfollowAPI(userId) {
    return axios.delete(`/user/${userId}/follow`, {
        withCredentials: true,
    });
}

function* unfollow(action) {
    try {
        yield call(unfollowAPI, action.data);
        yield put({ 
            type: UNFOLLOW_USER_SUCCESS,
            data: action.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: UNFOLLOW_USER_FAILURE,
            error: e,
        })
    }
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_USER_REQUEST, unfollow);
}

function loadFollowersAPI(userId) {
    return axios.get(`/user/${userId}/followers`, {
        withCredentials: true,
    });
}

function* loadFollowers(action) {
    try {
        const result = yield call(loadFollowersAPI, action.data);
        yield put({ 
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_FOLLOWERS_FAILURE,
            error: e,
        })
    }
}

function* watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function loadFollowingsAPI(userId) {
    return axios.get(`/user/${userId}/followings`, {
        withCredentials: true,
    });
}

function* loadFollowings(action) {
    try {
        const result = yield call(loadFollowingsAPI, action.data);
        yield put({ 
            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_FOLLOWINGS_FAILURE,
            error: e,
        })
    }
}

function* watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function removeFollowerAPI(userId) {
    return axios.delete(`/user/${userId}/follower`, {
        withCredentials: true,
    });
}

function* removeFollower(action) {
    try {
        yield call(removeFollowerAPI, action.data);
        yield put({ 
            type: REMOVE_FOLLOWER_SUCCESS,
            data: action.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: REMOVE_FOLLOWER_FAILURE,
            error: e,
        })
    }
}

function* watchRemoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchLoadUser),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchRemoveFollower),
    ]);
}

// call은 함수 동기적 호출
// fork는 함수 비동기적 호출 
// put은 액션 dispatch
// take는 해당 액션이 dispatch되면 제너레이터를 next하는 이펙트