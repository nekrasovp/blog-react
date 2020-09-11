
import { createStore } from 'redux';
import reducer from '../reducers/reducers';

const date = new Date();

const initialState = {
    currentUser: null,
    posts: [
        {
            id: 73952,
            heading: 'Nostrud ullamco deserunt aute id consequat',
            publicationDatetime: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, date.getHours() + 12, date.getMinutes() - 3),
            author: 94658,
            likedBy: [],
            dislikedBy: [94658, 15979],
            text: 'Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.'
        },
        {
            id: 79924,
            heading: 'Sunt ad dolore quis aute consequat',
            publicationDatetime: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, date.getHours() + 5, date.getMinutes() + 26),
            author: 94658,
            likedBy: [94658],
            dislikedBy: [15979],
            text: 'Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.'
        },
        {
            id: 72340,
            heading: 'Dolore incididunt mollit fugiat pariatur cupidatat',
            publicationDatetime: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, date.getHours() + 2, date.getMinutes() - 32),
            author: 15979,
            likedBy: [15979, 94658],
            dislikedBy: [],
            text: 'Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.'
        }
    ],
    people: [
        {
            id: 94658,
            name: 'admin',
            surname: 'admin',
            birthDate: new Date(2000, 1, 1),
            login: 'admin',
            password: 'admin'
        },
        {
            id: 15979,
            name: 'test11',
            surname: 'test11',
            birthDate: new Date(1990, 1, 1),
            login: 'test11',
            password: 'test11'
        }
    ]
};

export const store = createStore(reducer, initialState);

