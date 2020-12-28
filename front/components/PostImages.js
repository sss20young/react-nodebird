import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';


const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);
    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);

    if (images.length === 0) {
        return <img />
    }
    else if (images.length === 1) {
        return(
            <>
                <img src={`http://localhost:3065/${images[0].src}`} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    } 
    else if (images.length === 2) {
        return(
            <>
                <div>
                    <img src={`http://localhost:3065/${images[0].src}`} width="50%" onClick={onZoom} />
                    <img src={`http://localhost:3065/${images[1].src}`} width="50%" onClick={onZoom} />
                </div>
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <img src={`http://localhost:3065/${images[0].src}`} width="50%" onClick={onZoom} />
                    <div style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}>
                        <PlusOutlined />
                        <br />
                        {images.length - 1}개의 사진 더보기
                    </div>
                </div>
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    return;
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostImages;