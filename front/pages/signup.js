import React, { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Select, Checkbox, Button } from 'antd';

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
    const [ gender, setGender ] = useState('');
    const [ rememberme, setRememberme ] = useState(true);
    const [ passworderror, setPasswordError ] = useState(false);


    const onSubmit = (e) => {
        // e.preventDefault();
        if(password !== passwordcheck) {
            return setPasswordError(true);
        }
        console.log({
            id,
            password,
            passwordcheck,
            gender,
            rememberme
        });
    }

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordcheck(e.target.value);
    }

    const onChangeGender = value => {
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
    }

    const onChangeRememberMe = (e) => {
        setRememberme(e.target.checked);
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.2/antd.min.css"></link>
            </Head>
            <AppLayout>
            </AppLayout>
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
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Signup;