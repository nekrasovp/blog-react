
import React from 'react';

import {containsItem} from '../../usefulFunctions/usefulFunctions';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import Author from '../Author/Author';
import './AllAuthors.css';

const AllAuthors = props => {

    // Search authors with more then one blog
    const authorsSearch = () => {
        let authors = [];

        for (let i = 0; i < props.posts.length; i++) {
            if(!containsItem(authors, props.posts[i].author)) {
                authors.push(props.posts[i].author);
            }
        }
        return authors;
    };

    const renderAuthors = () => {
        const authors = authorsSearch();

        return props.people
            .filter(person => containsItem(authors, person.id))
            .map((person, key) => {
                return (
                    <Author
                        key={key}
                        authorInfo={person}
                    />
                )
            })
    };

    return (
        <div className="AllAuthors">
            <SectionHeader headerText="Authors" />
            <div className="authors-wrapper">
                {renderAuthors()}
            </div>
        </div>
    )
};

export default AllAuthors;

