import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt="dwawd" src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg" />
            {props.message}
            <div>
                <span>like</span>
                {props.likeCounts}
            </div>
        </div>);
}

export default Post;