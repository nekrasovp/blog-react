/**
 * Created by 111 on 12.04.2019.
 */

import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {ADD_LIKE, REMOVE_LIKE, ADD_DISLIKE, REMOVE_DISLIKE} from '../../actions/actionTypes';
import {changeLikeAction} from '../../actions/actions';
import {containsItem, beautifulDate, beautifulTime} from '../../usefulFunctions/usefulFunctions';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import './PostDetails.css';

class PostDetails extends React.Component {

    getCurrentPost() {
        return (
            this.props.posts.find((elem) => {
                return elem.id === +this.props.match.params.id
            })
        )
    }

    likeClick = () => {
        if(containsItem(this.getCurrentPost().likedBy, this.props.currentUser)) {
            this.props.changeLikeAction(this.props.currentUser, +this.props.match.params.id, REMOVE_LIKE);
        }
        else {
            if(containsItem(this.getCurrentPost().dislikedBy, this.props.currentUser)) {
                this.props.changeLikeAction(this.props.currentUser, +this.props.match.params.id, REMOVE_DISLIKE);
            }
            this.props.changeLikeAction(this.props.currentUser, +this.props.match.params.id, ADD_LIKE);
        }
    };

    dislikeClick = () => {
        if(containsItem(this.getCurrentPost().dislikedBy, this.props.currentUser)) {
            this.props.changeLikeAction(this.props.currentUser, +this.props.match.params.id, REMOVE_DISLIKE);
        }
        else {
            if(containsItem(this.getCurrentPost().likedBy, this.props.currentUser)) {
                this.props.changeLikeAction(this.props.currentUser, +this.props.match.params.id, REMOVE_LIKE);
            }
            this.props.changeLikeAction(this.props.currentUser, +this.props.match.params.id, ADD_DISLIKE);
        }
    };

    findAuthor = (authorId) => {
        const authors = this.props.authors;

        for (let i = 0; i < authors.length; i++) {
            if (authors[i].id === authorId) {
                return authors[i]
            }
        }
    };

    render() {

        const warningStyle = this.props.currentUser !== null ? {display: 'none'} : {};
        const author = !this.getCurrentPost() ? null : this.findAuthor(this.getCurrentPost().author);

        return (
            !this.getCurrentPost()
                ?
                <ErrorMessage
                    errorMessage="Post not found"
                    buttonText="Go to latest posts"
                    link="/posts/"
                />
                :
                <div className="PostDetailsWrapper">
                    <div className="PostDetails">
                        <h2 className="postDetails__heading">{this.getCurrentPost().heading}</h2>
                        <div className="postDetails-info">
                            <Link to={"/authors/" + author.id}>
                                <p
                                    className="postDetails__author"
                                    onClick={() => {
                                        this.props.history.push('/authors/' + author.id)
                                    }}
                                >
                                    {author.name} {author.surname}
                                </p>
                            </Link>

                            <p className="postDetails__date">
                                {beautifulDate(this.getCurrentPost().publicationDatetime)}
                                &#8195;
                                {beautifulTime(this.getCurrentPost().publicationDatetime)}
                            </p>
                        </div>
                        <p className="postDetails__text">{this.getCurrentPost().text}</p>
                    </div>
                    <div className="like-block">
                        <h2>Rate post:</h2>
                        <div className="vote-block">
                            <span className="likes">
                                {this.getCurrentPost().likedBy.length}
                                &ensp;
                                {containsItem(this.getCurrentPost().likedBy, this.props.currentUser)
                                    ? <i className="fa fa-thumbs-up" onClick={this.props.currentUser !== null ? this.likeClick : null} />
                                    : <i className="fa fa-thumbs-o-up" onClick={this.props.currentUser !== null ? this.likeClick : null} />
                                }
                            </span>
                            <span className="dislikes">
                                    {this.getCurrentPost().dislikedBy.length}
                                &ensp;
                                {containsItem(this.getCurrentPost().dislikedBy, this.props.currentUser)
                                    ? <i className="fa fa-thumbs-down" onClick={this.props.currentUser !== null ? this.dislikeClick : null} />
                                    : <i className="fa fa-thumbs-o-down" onClick={this.props.currentUser !== null ? this.dislikeClick : null} />
                                }
                            </span>
                        </div>
                        <p className="likeWarning" style={warningStyle}>
                            Enter or register for rating
                        </p>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        currentUser: state.currentUser,
        authors: state.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeLikeAction: (currentUser, postId, actionType) => dispatch(changeLikeAction(currentUser, postId, actionType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
