
import React from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.css';

const Footer = props => {
    return (
        <div className="Footer">
            <div className="footer-menu-wrapper">
                <ul>
                    <li>
                        <NavLink to="/" exact className="navLink footerNavLink">
                            Latest
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts" exact className="navLink footerNavLink">
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/authors" exact className="navLink footerNavLink">
                            Authors
                        </NavLink>
                    </li>
                    { props.auth
                        ?
                        <li>
                            <NavLink to="/new-post" className="navLink footerNavLink">
                                Publish
                            </NavLink>
                        </li>
                        : null
                    }
                    <li>
                        <NavLink to="/about" className="navLink footerNavLink">
                            About
                        </NavLink>
                    </li>
                    { props.auth
                        ?
                        <li>
                            <NavLink to="/my-profile" className="navLink footerNavLink">
                                Profile
                            </NavLink>
                        </li>
                        :
                        <li>
                            <NavLink to="/enter" className="navLink footerNavLink">
                                Signin
                            </NavLink>
                        </li>
                    }
                    { props.auth
                        ?
                        <li>
                            <NavLink to="/exit" className="navLink footerNavLink">
                                Signout
                            </NavLink>
                        </li>
                        :
                        <li>
                            <NavLink to="/register" className="navLink footerNavLink">
                                Join
                            </NavLink>
                        </li>
                    }
                </ul>
            </div>

        </div>
    )
};

export default Footer;
