
import React from 'react';

import SectionHeader from '../UI/SectionHeader/SectionHeader';
import Post from '../Post/Post';
import './LatestPosts.css';

const LatestPosts = props => {

    /* Take only last 24 hour posts */
    const isLatest = date => {
        const nowDate = new Date();
        const minDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() - 1, nowDate.getHours(), nowDate.getMinutes());
        const maxDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), nowDate.getHours(), nowDate.getMinutes());

        return (date >= minDate) && (date <= maxDate);
    };

    return (
        <div className="LatestPosts">
            <SectionHeader headerText="Latest posts" />

            {props.posts
                .filter(post => isLatest(post.publicationDatetime))
                .map((post, index) => {
                    return (
                        <Post postInfo={post} key={index} />
                    )
                })
            }
        </div>
    )
};

export default LatestPosts;
