
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {beautifulDate, beautifulTime} from '../../usefulFunctions/usefulFunctions';
import './Post.css';

class Post extends React.Component {

    getCurrentAuthor() {
        return (
            this.props.people.find((person) => {
                return person.id === this.props.postInfo.author /*this.props.user*/
            })
        )
    }

    addEllipsis = (str) => {
        return str + '...';
    };

    mainCutter = (text, symbols) => {
        if (text.length <= symbols) {
            return text;
        }
        return this.addEllipsis(text.slice(0, symbols));
    };

    render() {
        const postMaxLength = 900; // Preview max word count

        return (
            <div className="Post" key={this.props.key}>
                <Link to={"/posts/" + this.props.postInfo.id}>
                    <h3 className="post__heading" onClick={() => this.props.history.push('/posts/' + this.props.postInfo.id)}>
                        {this.props.postInfo.heading}
                    </h3>
                </Link>

                <div className="post-info">
                    <Link to={"/authors/" + this.getCurrentAuthor().id}>
                        <p
                            className="post__author"
                            onClick={() => {
                                this.props.history.push('/authors/' + this.getCurrentAuthor().id)
                            }}
                        >
                            {this.getCurrentAuthor().name} {this.getCurrentAuthor().surname}
                        </p>
                    </Link>

                    <p className="post__date">
                        {beautifulDate(this.props.postInfo.publicationDatetime)}
                        &#8195;
                        {beautifulTime(this.props.postInfo.publicationDatetime)}
                    </p>
                </div>

                <p className="post__text">
                    { this.mainCutter(this.props.postInfo.text, postMaxLength) }
                </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        people: state.people,
        user: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps)(Post));

