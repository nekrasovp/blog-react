
import React from 'react';
import { connect } from 'react-redux';

import Post from '../Post/Post';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import {beautifulDate} from '../../usefulFunctions/usefulFunctions';
import './AuthorDetails.css';

class AuthorDetails extends React.Component {

    getCurrentAuthor() {
        return (
            this.props.people.find((person) => {
                return person.id === +this.props.match.params.id
            })
        )
    }

    renderPosts() {
        return this.props.posts
            .filter(post => post.author === this.getCurrentAuthor().id)
            .map((post, index) => {
                return (
                    <Post postInfo={post} key={index} />
                )
            })
    }

    render() {
        return (
            !this.getCurrentAuthor()
                ?
                <ErrorMessage
                    errorMessage="Author not found"
                    buttonText="Go to Authors page"
                    link="/authors/"
                />
                :
                <div className="AuthorDetails">
                    <h1 className="authorDetails__heading">{this.getCurrentAuthor().name} {this.getCurrentAuthor().surname}</h1>

                    <div className="authorDetails-info">
                        <p className="authorDetails__date">
                            Birt day: {beautifulDate(this.getCurrentAuthor().birthDate)}
                        </p>
                        <p className="authorDetails__date">
                            Login: {this.getCurrentAuthor().login}
                        </p>
                    </div>

                    <h2>Author posts:</h2>

                    <div className="authorPosts">
                        {this.renderPosts()}
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        people: state.people,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(AuthorDetails);
