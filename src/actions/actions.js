
import {PUBLISH_POST, REGISTER, EXIT, ENTER} from '../actions/actionTypes'

export function changeLikeAction(currentUser, postId, actionType) {
    return {
        type: actionType,
        currentUser,
        postId
    }
}

export function publishPostAction(id, author, title, text) {
    return {
        type: PUBLISH_POST,
        id,
        author,
        title,
        text
    }
}

export function registerAction(newUserInfo) {
    return {
        type: REGISTER,
        newUserInfo
    }
}

export function exitAction() {
    return {
        type: EXIT
    }
}

export function enterAction(login) {
    return {
        type: ENTER,
        login
    }
}

