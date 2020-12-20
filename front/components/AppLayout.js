import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from '../components/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducers/user';

const AppLayout = ({ children }) => {
    const { isLoggedIn, me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!me) {
            dispatch({
                type: LOAD_USER_REQUEST,
            });
        }
    }, []);

    return(
        <div>
            <Menu
                mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="search">
                    <Input.Search enterButton
                        style={{ verticalAlign: 'middle'}} >
                    </Input.Search>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/* xs: 모바일, sm: 작은 화면, md: 중간 화면, lg: 큰 화면 */}
                {/* 24가 최대 */}
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <Link href="https://www.github.com/sss20young"><a target="_blank">Made by sss20young</a></Link>
                </Col>
            </Row>
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;