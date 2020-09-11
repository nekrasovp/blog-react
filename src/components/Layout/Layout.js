
import React from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = props => {
    return (
        <div className="Layout">
            <div className="left-bar bar"/>

            <div className="main">
                <div className="content">
                    <Header />

                    <Menu auth={props.user}/>

                    <div className="mainInfoWrapper">
                        {props.children}
                    </div>
                </div>

                <Footer auth={props.user}/>
            </div>

            <div className="right-bar bar"/>
        </div>
    )
};

export default Layout;