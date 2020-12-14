import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction, LOG_IN } from '../reducers/user';

const Home = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);

    useEffect(() => {
        // dispatch({
        //     type: LOG_IN,
        //     data: {
        //         nickname: 'SeoyoungKim',
        //     }
        // })
        dispatch(loginAction());
        dispatch(logoutAction());
    }, []);

    return (
        <div>
            {user ? <div>로그인 했습니다: {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
            {/* 업로드 */}
            {isLoggedIn && <PostForm />}

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