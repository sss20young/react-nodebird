import React from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';

const PostForm = () => {
    const { imagePaths } = useSelector(state => state.post);

    return(
        <Form style={{ margin: '20px' }} encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
            <div>
                <input type="file" multiple hidden></input>
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right '}} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {/* 이미지 미리보기 */}
                {imagePaths.map((v, i) => {
                    return(
                        <div key={v} style={{ display: 'inline-block'}}>
                            <img src={'http://localhost:3000/'+v} style={{ width: '200px' }} alt={v} />
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