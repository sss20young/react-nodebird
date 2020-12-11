import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
    const [ userId, setUserId ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

    const onSubmitForm = useCallback((e) => {
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
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    )
};

export default LoginForm;