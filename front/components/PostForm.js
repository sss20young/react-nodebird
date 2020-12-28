import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';

const PostForm = () => {
    const [ text, setText ] = useState('');
    const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();

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
        const formData = new FormData();
        imagePaths.forEach((i) => {
            formData.append('image', i);
        });
        formData.append('content', text);
        dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePaths]);

    const onChangeImages = useCallback((e) => {
        const imageFormData = new FormData(); // Ajax 사용
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        })
    }, []);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onRemoveImage = useCallback(index => () => {
        dispatch({
            type: REMOVE_IMAGE,
            index,
        })
    }, []);

    return(
        // encType="multipart/form-data": 이미지 업로드 시 사용
        <Form style={{ margin: '20px' }} encType="multipart/form-data" onFinish={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText}/>
            <div>
                <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages}></input>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right '}} htmlType="submit" loading={isAddingPost}>짹짹</Button>
            </div>
            <div>
                {/* 이미지 미리보기 */}
                {imagePaths.map((v, i) => {
                    return(
                        <div key={v} style={{ display: 'inline-block'}}>
                            <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button onClick={onRemoveImage(i)}>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    )
}

export default PostForm;