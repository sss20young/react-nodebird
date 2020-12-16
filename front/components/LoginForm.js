import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
    const [ userId, setUserId ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');
    const { isLoggingIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onSubmitForm = useCallback((e) => {
        dispatch({
            type: 'LOG_IN_REQUEST',
        });
        console.log({
            userId,
            userPassword,
        });
    }, [userId, userPassword]);

    const onChangeId = useCallback((e) => {
        setUserId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setUserPassword(e.target.value);
    }, []);

    return(
        <Form onFinish={onSubmitForm} style={{ padding: '10px' }}>
            <div>
                <label>아이디</label>
                <br />
                <Input value={userId} onChange={onChangeId} required></Input>
            </div>
            <div>
                <label>비밀번호</label>
                <br />
                <Input type="password" value={userPassword} onChange={onChangePassword} required></Input>
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    )
};

export default LoginForm;