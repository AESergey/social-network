import React, { Component } from 'react';
import { addPostActionCreactor, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) },
        addPost: () => { dispatch(addPostActionCreactor()) }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;