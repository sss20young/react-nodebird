import { all, takeLatest, takeEvery, fork, call, put, take, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_FAILURE } from '../reducers/user';
import axios from 'axios';

function loginAPI() {
    // 서버에 요청을 보내는 부분
    return axios.post('/login');
}

function* login() {
    try {
        // yield call(loginAPI);
        yield delay(2000);
        yield put({ // put은 dispatch와 동일
            type: LOG_IN_SUCCESS
        })
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        })
    }
}

// function* watchLogin() {
//     while (true) {
//         yield take(LOG_IN);
//         yield put({
//             type: LOG_IN_SUCCESS,
//         })
//     }
// }

function* watchLogin() {
    // yield takeEvery(LOG_IN_REQUEST, login); // 모든 요청이 유효할 때

    yield takeLatest(LOG_IN_REQUEST, login); // takeLatest는 LOG_IN 액션이 dispatch되길 기다려서 dispatch될 때 login 제너레이터를 호출 + 여러번 action일 때 마지막 action만 받아 처리함
    // 이전 요청이 끝나지 않은게 있다면 이전 요청을 취소함
}

function signUpAPI() {
    // 서버에 요청을 보내는 부분
    return axios.post('/signup');
}

function* signUp() {
    try {
        // yield call(signUpAPI);
        yield delay(2000);
        throw new Error('Error');
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
        fork(watchSignUp),
    ]);
}

// call은 함수 동기적 호출
// fork는 함수 비동기적 호출 
// put은 액션 dispatch
// take는 해당 액션이 dispatch되면 제너레이터를 next하는 이펙트