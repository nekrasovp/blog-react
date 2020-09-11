
import React from 'react';
import Lorem from 'react-lorem-component';

import SectionHeader from '../UI/SectionHeader/SectionHeader';
import './About.css';

const About = () => {
    return (
        <div className="About">
            <SectionHeader headerText="About"/>
            <Lorem />
        </div>
    )
};

export default About;

