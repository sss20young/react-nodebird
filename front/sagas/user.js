import { all, takeLatest, takeEvery, fork, call, put, take, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from '../reducers/user';
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

function loadUserAPI() {
    return axios.get('/user', {
        withCredentials: true,
    });
}

function* loadUser() {
    try {
        const result = yield call(loadUserAPI);
        yield put({ 
            type: LOAD_USER_SUCCESS,
            data: result.data,
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

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchLoadUser),
        fork(watchSignUp),
    ]);
}

// call은 함수 동기적 호출
// fork는 함수 비동기적 호출 
// put은 액션 dispatch
// take는 해당 액션이 dispatch되면 제너레이터를 next하는 이펙트