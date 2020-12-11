import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';

const UserProfile = ({ dummy }) => {
    return(
        <Card
            actions={[
                <div key="twit">짹짹<br />{dummy.Post.length}</div>,
                <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
                <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
            ]}>
            <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}>
            </Card.Meta>
        </Card>
    );
};

UserProfile.propTypes = {
    dummy: PropTypes.shape({
        Post: PropTypes.object,
        Followings: PropTypes.object,
        Followers: PropTypes.object,
        nickname: PropTypes.string
    })
};

export default UserProfile;