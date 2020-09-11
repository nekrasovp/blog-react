import React from 'react';
import {NavLink} from 'react-router-dom';

import './Menu.css';

const Menu = props => {
    return (
        <div className="Menu">
            <div className="menu-item">
                <NavLink to="/" exact className="navLink one-line-link" activeClassName="active-menu-item">
                    <span>Latest</span>
                </NavLink>
            </div>

            <div className="menu-item">
                <NavLink to="/posts" exact className="navLink one-line-link" activeClassName="active-menu-item">
                    <span>All</span>
                </NavLink>
            </div>

            <div className="menu-item">
                <NavLink to="/authors" exact className="navLink one-line-link" activeClassName="active-menu-item">
                    <span>Authors</span>
                </NavLink>
            </div>

            { props.auth ?
                <div className="menu-item">
                    <NavLink to="/new-post" className="navLink one-line-link" activeClassName="active-menu-item">
                        <span>Publish</span>
                    </NavLink>
                </div>
                : null
            }

            <div className="menu-item">
                <NavLink to="/about" className="navLink one-line-link" activeClassName="active-menu-item">
                    <span>About</span>
                </NavLink>
            </div>

            { props.auth ?
                <div className="menu-item">
                    <div className="menu-item_separate">
                        <NavLink to="/my-profile"
                                 className="navLink menu-item_separate-link"
                                 activeClassName="active-menu-item"
                        >
                            Profile
                        </NavLink>
                    </div>

                    <div className="menu-item_separate">
                        <NavLink to="/exit"
                                 className="navLink menu-item_separate-link"
                                 activeClassName="active-menu-item"
                        >
                            Signout
                        </NavLink>
                    </div>
                </div>
                :
                <div className="menu-item">
                    <div className="menu-item_separate">
                        <NavLink to="/enter"
                                 className="navLink menu-item_separate-link"
                                 activeClassName="active-menu-item"
                        >
                            Signin
                        </NavLink>
                    </div>

                    <div className="menu-item_separate">
                        <NavLink to="/register"
                                 className="navLink menu-item_separate-link"
                                 activeClassName="active-menu-item"
                        >
                            Join
                        </NavLink>
                    </div>
                </div>
            }

        </div>
    )
};

export default Menu;
