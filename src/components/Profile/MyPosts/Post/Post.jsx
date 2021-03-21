import classes from './Post.module.css';
import React, { Component } from 'react';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg' />
            {props.message}
            <div>
                <span>like </span>
                {props.likeCount}
            </div>
        </div>
    );
}

export default Post;