import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction, LOG_IN_REQUEST } from '../reducers/user';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
    const { me } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
        });
    }, []);

    return (
        <div>
            {/* 업로드 */}
            {me && <PostForm />}

            {/* 게시글 리스트 */}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c} />
                )
            })}
        </div>
    );
};

export default Home;