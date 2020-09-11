
import React from 'react';

import Post from '../Post/Post';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import {beautifulDate, containsItem} from '../../usefulFunctions/usefulFunctions';
import './MyProfile.css';

const MyProfile = props => {

    const getCurrentUser = () => {
        return (
            props.people.find((person) => {
                return person.id === props.user
            })
        )
    };

    const renderWrittenPosts = () => {
        const writtenPosts = props.posts.filter(post => post.author === getCurrentUser().id);

        if (writtenPosts.length > 0) {
            return writtenPosts.map((post, index) => {
                    return (
                        <Post postInfo={post} key={index} />
                    )
            })
        }
        else {
            return (
                <p className="noPosts">no posts yet</p>
            )
        }
    };

    const renderLikedPosts = () => {
        const likedPosts = props.posts.filter(post => containsItem(post.likedBy, props.user));

        if (likedPosts.length > 0) {
            return likedPosts.map((post, index) => {
                return (
                    <Post postInfo={post} key={index} />
                )
            })
        }
        else {
            return (
                <p className="noPosts">no liked posts yet</p>
            )
        }
    };

    return (
        <div className="MyProfile">
            <SectionHeader headerText="Your profile" />

            <div className="profile-info">
                <i className="fa fa-user-circle" aria-hidden="true" />

                <p className="user-birthDate">
                    Name: {getCurrentUser().name}
                </p>

                <p className="user-birthDate">
                    Surname: {getCurrentUser().surname}
                </p>

                <p className="user-birthDate">
                    Id: {getCurrentUser().id}
                </p>

                <p className="user-birthDate">
                    Birthday: {beautifulDate(getCurrentUser().birthDate)}
                </p>

                <p className="user-birthDate">
                    Login: {getCurrentUser().login}
                </p>

                <p className="user-birthDate">
                    Password: {getCurrentUser().password}
                </p>
            </div>

            <div className="yourPostsWrapper">
                <h3>Your posts:</h3>

                <div className="yourPosts">
                    {renderWrittenPosts()}
                </div>
            </div>

            <div className="likedPostsWrapper">
                <h3>Liked posts:</h3>

                <div className="likedPosts">
                    {renderLikedPosts()}
                </div>
            </div>
        </div>
    )
};

export default MyProfile;

