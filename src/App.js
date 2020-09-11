
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import Enter from './components/Enter/Enter';
import PostDetails from './components/PostDetails/PostDetails';
import Register from './components/Register/Register';
import Exit from './components/Exit/Exit';
import AllPosts from './components/AllPosts/AllPosts';
import AllAuthors from './components/AllAuthors/AllAuthors';
import AuthorDetails from './components/AuthorDetails/AuthorDetails';
import NewPost from './components/NewPost/NewPost';
import LatestPosts from './components/LatestPosts/LatestPosts';
import MyProfile from './components/MyProfile/MyProfile';
import About from './components/About/About';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Layout user={this.props.currentUser}>
                {this.props.currentUser !== null
                    ?
                    <Switch>
                        <Route path="/posts" exact
                               render={() => <AllPosts posts={this.props.posts} />} />
                        <Route path="/posts/:id" component={PostDetails} />
                        <Route path="/authors" exact
                               render={() => <AllAuthors posts={this.props.posts} people={this.props.people} />} />
                        <Route path="/authors/:id" component={AuthorDetails} />
                        <Route path="/about" component={About} />
                        <Route path="/new-post" component={NewPost} />
                        <Route path="/exit" component={Exit}/>
                        <Route path="/my-profile"
                               render={() => <MyProfile posts={this.props.posts} people={this.props.people} user={this.props.currentUser} />} />
                        <Route path="/" exact
                               render={() => <LatestPosts posts={this.props.posts} />} />
                        <Redirect to="/" />
                    </Switch>
                    :
                    <Switch>
                        <Route path="/posts" exact
                               render={() => <AllPosts posts={this.props.posts} />} />
                        <Route path="/posts/:id" component={PostDetails} />
                        <Route path="/authors" exact
                               render={() => <AllAuthors posts={this.props.posts} people={this.props.people} />} />
                        <Route path="/authors/:id" component={AuthorDetails} />
                        <Route path="/about" component={About} />
                        <Route path="/enter" component={Enter} />
                        <Route path="/register" component={Register} />
                        <Route path="/" exact
                               render={() => <LatestPosts posts={this.props.posts} />} />
                        <Redirect to="/" />
                    </Switch>
                }
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        posts: state.posts,
        people: state.people
    }
};

export default connect(mapStateToProps)(App);

