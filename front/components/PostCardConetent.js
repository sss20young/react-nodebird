import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
    return (
        <div>
            {postData.split(/(#[^\s]+)/g).map((v) => { // hashtag를 동적으로
                if (v.match(/#[^\s]+/)) {
                    return (
                        <Link href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }} key={v} as={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
                    )
                }
                return v;
            })}
        </div> // a tag X -> next Link tag
    )
}

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
}

export default PostCardContent;