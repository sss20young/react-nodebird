import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar } from 'antd';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard'

const User = ({ id }) => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);
    const { userInfo } = useSelector(state => state.user);

    useEffect(() => {
        dispatch({
            type: LOAD_USER_REQUEST,
            data: id,
        })
        dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            data: id,
        });
    }, []);
    return (
        <div>
            {userInfo 
            ? ( 
                <Card
                actions={[
                    <div key="twit">짹짹<br />{userInfo.Posts}</div>,
                    <div key="following">팔로잉<br />{userInfo.Followings}</div>,
                    <div key="follower">팔로워<br />{userInfo.Followers}</div>,
                ]}>
                    <Card.Meta
                        avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                        title={userInfo.nickname}>
                    </Card.Meta>
                </Card>
            ) : null
            }
            {mainPosts.map(c => {
                return <PostCard key={+c.createdAt} post={c}></PostCard>
            })}
        </div>
    )
};

User.propTypes = {
    id: PropTypes.number.isRequired,
}

User.getInitialProps = async (context) => {
    console.log('user getInitialProps', context.query.id); // id는 server.js에서 넘겨준 id
    return { id: parseInt(context.query.id, 10) };
};

export default User;