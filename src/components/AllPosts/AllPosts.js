
import React from 'react';

import Post from '../Post/Post';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import './AllPosts.css';

const AllPosts = props => {
    return (
        <div className="AllPosts">
            <SectionHeader headerText="All posts" />

            <div className="posts-wrapper">
                {props.posts.map((post, index) => {
                    return (
                        <Post postInfo={post} key={index} />
                    )
                })}
            </div>
        </div>
    )
};

export default AllPosts;

