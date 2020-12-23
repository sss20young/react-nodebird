import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
    const [ text, setText ] = useState('');

    const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    useEffect(() => {
        setText('');
    }, [postAdded === true]);

    const onSubmitForm = useCallback(() => { // useCallback에서 state쓰면 []배열 안에 넣기
        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요!');
        }
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                content: text.trim(),
            },
        })
    }, [text]);

    return(
        <Form style={{ margin: '20px' }} encType="multipart/form-data" onFinish={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText}/>
            <div>
                <input type="file" multiple hidden></input>
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right '}} htmlType="submit" loading={isAddingPost}>짹짹</Button>
            </div>
            <div>
                {/* 이미지 미리보기 */}
                {imagePaths.map((v, i) => {
                    return(
                        <div key={v} style={{ display: 'inline-block'}}>
                            <img src={`http://localhost:3000/${v}`} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    )
}

export default PostForm;