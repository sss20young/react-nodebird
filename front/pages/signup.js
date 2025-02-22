import React, { useState, useCallback, useEffect } from 'react';
import Router from 'next/router';
import { Form, Input, Select, Checkbox, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Signup = () => {
    const [ id, setId ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordcheck, setPasswordcheck ] = useState('');
    const [ nickname, setNickname ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ rememberme, setRememberme ] = useState(true);
    const [ passworderror, setPasswordError ] = useState(false);
    const dispatch = useDispatch();
    const { isSigningUp, me } = useSelector(state => state.user);

    useEffect(() => {
        if (me) {
            alert('로그인 했으니 메인페이지로 이동합니다.');
            Router.push('/');
        }
    }, [me && me.id]);

    // useCallback: state 변경시, props로 전달하는 함수도 리렌더링 되는데, 이때 리렌더링 방지
    const onSubmit = useCallback((e) => {
        // e.preventDefault();
        if(password !== passwordcheck) {
            return setPasswordError(true);
        }
        dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                userId: id,
                password,
                nickname,
            }
        });

    }, [id, nickname, password, passwordcheck]);

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordcheck(e.target.value);
    }, [password]);

    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);

    const onChangeGender = useCallback(value => {
        switch (value) {
            case 'male':
                setGender('male');
                break;
            case 'female':
                setGender('female');
                break;
            case 'other':
                setGender('other');
                break;
        }
    }, []);

    const onChangeRememberMe = useCallback((e) => {
        setRememberme(e.target.checked);
    }, []);

    return (
        <>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onSubmit}>
                <Form.Item
                    label="아이디"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    value={id}
                    onChange={onChangeId}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="비밀번호"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    value={password}
                    onChange={onChangePassword}>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="비밀번호 확인"
                    name="passwordcheck"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    value={passwordcheck}
                    onChange={onChangePasswordCheck}>
                    <Input.Password />
                </Form.Item>
                <div>{passworderror && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}</div>

                <Form.Item
                    label="닉네임"
                    name="nickname"
                    rules={[{ required: true, message: 'Please input your nickname!' }]}
                    value={nickname}
                    onChange={onChangeNickname}>
                    <Input />
                </Form.Item>

                <Form.Item 
                    name="gender" 
                    label="성별" 
                    rules={[{ required: true }]} 
                    value={gender}>
                    <Select
                        placeholder="선택하시오"
                        allowClear
                        onChange={onChangeGender}>
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>

                <Form.Item 
                    {...tailLayout} 
                    name="remember" 
                    valuePropName="checked"
                    value={rememberme}
                    onChange={onChangeRememberMe}>
                    <Checkbox>나중에도 저장</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Signup;