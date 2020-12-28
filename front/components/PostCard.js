import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import Link from 'next/link';
import PostImages from './PostImages'
import { Card, Button, Avatar, Form, Input, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';

import PostCardContent from './PostCardConetent';
import { LOAD_COMMENTS_REQUEST, ADD_COMMENT_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from '../reducers/post';
import { FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST } from '../reducers/user';

const PostCard = ({ post }) => {
    const [ commentFormOpened, setCommentFormOpened ] = useState(false);
    const [ commentText, setCommentText ] = useState('');
    const { me } = useSelector(state => state.user);
    const { commentAdded, isAddingComment } = useSelector(state => state.post);

    const dispatch = useDispatch();

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
        if (commentFormOpened) {
            dispatch({
                type: LOAD_COMMENTS_REQUEST,
                data: post.id,
            });
        }
    }, []);

    const onSubmitComment = useCallback(() => {
        if (!me) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
                content: commentText,
            }
        });
    }, [me && me.id, commentText]);

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, []);

    useEffect(() => {
        setCommentText('');
    }, [commentAdded === true]);

    const liked = me && post.Likers && post.Likers.find((v) => v.id === me.id);

    const onToggleLike = useCallback(() => {
        if (!me) {
            return alert('로그인이 필요합니다!');
        }

        if (liked) {
            dispatch({
                type: UNLIKE_POST_REQUEST,
                data: post.id,
            });
        } else {
            dispatch({
                type: LIKE_POST_REQUEST,
                data: post.id,
            });
        }
    }, [me && me.id, post && post.id, liked]);

    const onRetweet = useCallback(() => {
        if (!me) {
            return alert('로그인이 필요합니다!');
        }

        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        })
    }, [me && me.id, post.id]);

    const onFollow = useCallback(userId => () => {
        dispatch({
            type: FOLLOW_USER_REQUEST,
            data: userId,
        })
    }, []);

    const onUnfollow = useCallback(userId => () => {
        dispatch({
            type: UNFOLLOW_USER_REQUEST,
            data: userId,
        })
    }, []);

    return(
        <>
            <Card
                key={+post.createdAt}
                cover={post.Images && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined onClick={onRetweet} />,
                    liked
                    ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined onClick={onToggleComment} />,
                    <EllipsisOutlined />
                ]}
                title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
                extra={
                    !me || post.User.id === me.id 
                    ? null 
                    : me.Followings && me.Followings.find(v => v.id === post.User.id)
                        ? <Button onClick={onUnfollow(post.User.id)}>언팔로우</Button>
                        : <Button onClick={onFollow(post.User.id)}>팔로우</Button>
                }
                >
                {post.RetweetId && post.Retweet
                ? ( // retweet 한 경우
                    <Card
                        cover={post.Retweet.Images && <PostImages images={post.Retweet.Images} />}
                    >
                        <Card.Meta
                            // 새로고침을 막기 위해 Link 수정
                            // avatar={<Link href={`/user/${post.User.id}`}><a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>} // 서버쪽 주소
                            avatar={<Link href={{ pathname: '/user', query: { id: post.Retweet.User.id } }} as={`/user/${post.Retweet.User.id}`}><a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a></Link>}
                            title={post.Retweet.User.nickname}
                            description={<PostCardContent postData={post.Retweet.content} />}
                        />
                    </Card>
                )
                : ( // retweet 안한 경우
                    <Card.Meta
                        // 새로고침을 막기 위해 Link 수정
                        // avatar={<Link href={`/user/${post.User.id}`}><a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>} // 서버쪽 주소
                        avatar={<Link href={{ pathname: '/user', query: { id: post.User.id } }} as={`/user/${post.User.id}`}><a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>}
                        title={post.User.nickname}
                        description={<PostCardContent postData={post.content} />}
                    />
                )}
            </Card>
            {commentFormOpened && (
                <>
                    <Form onFinish={onSubmitComment}>
                        <Form.Item>
                            <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
                    </Form>
                    <List
                        header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}><a><Avatar>{item.User.nickname[0]}</Avatar></a></Link>}
                                    content={item.content}
                                />
                            </li>
                        )}>
                    </List>
                </>
            )}
        </>
    )
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    })
};

export default PostCard;