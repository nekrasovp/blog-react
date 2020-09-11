
import {
    ADD_LIKE,
    REMOVE_LIKE,
    ADD_DISLIKE,
    REMOVE_DISLIKE,
    PUBLISH_POST,
    REGISTER,
    EXIT,
    ENTER
} from '../actions/actionTypes';

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_LIKE: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.postId) {
                        return {
                            ...post,
                            likedBy:[...post.likedBy, action.currentUser]
                        }
                    }
                    return post;
                })
            };
        }
        case REMOVE_LIKE: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.postId) {
                        let arr1 = [];

                        post.likedBy
                            .filter(user => user !== action.currentUser)
                            .map(user => arr1.push(user))
                        ;

                        return {
                            ...post,
                            likedBy: arr1
                        }
                    }
                    return post;
                })
            };
        }
        case ADD_DISLIKE: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.postId) {
                        return {
                            ...post,
                            dislikedBy:[...post.dislikedBy, action.currentUser]
                        }
                    }
                    return post;
                })
            };
        }
        case REMOVE_DISLIKE: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.postId) {
                        let arr2 = [];

                        post.dislikedBy
                            .filter(user => user !== action.currentUser)
                            .map(user => arr2.push(user))
                        ;

                        return {
                            ...post,
                            dislikedBy: arr2
                        }
                    }
                    return post;
                })
            };
        }
        case PUBLISH_POST: {
            const date = new Date();
            const postDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
            const newPost = {
                id: action.id,
                heading: action.title,
                publicationDatetime: postDate,
                author: action.author,
                likedBy: [],
                dislikedBy: [],
                text: action.text
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        }
        case REGISTER: {
            return {
                ...state,
                people: [...state.people, action.newUserInfo],
                currentUser: action.newUserInfo.id
            };
        }
        case EXIT: {
            return {
                ...state,
                currentUser: null
            };
        }
        case ENTER: {
            let id;

            for (let i = 0; i < state.people.length; i++) {
                if (state.people[i].login === action.login) {
                    id = state.people[i].id;
                }
            }

            return {
                ...state,
                currentUser: id
            };
        }
        default:
            return state;
    }
};

export default reducer;
