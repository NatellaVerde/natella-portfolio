import React from "react";
import PropTypes from "prop-types";
import style from "./navBar.module.css";

const NavBar = ({ color }) => {
    return (
        <nav className={"w-75 navbar justify-content-end " + style.visible}>
                <ul className="nav" style={{ color: `${color}` }}>
                    <li className="nav-item">
                        <a
                            className="nav-link "
                            style={{ color: "inherit", cursor: "pointer" }}
                            aria-current="page"
                            href="#portfolio"
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link "
                            style={{ color: "inherit", cursor: "pointer" }}
                            aria-current="page"
                            href="#feedback"
                        >
                            Feedback
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link "
                            aria-current="page"
                            style={{ color: "inherit", cursor: "pointer" }}
                            href="#id-promo"
                        >
                            Contacts
                        </a>
                    </li>
                </ul>
        </nav>
    );
};

NavBar.propTypes = {
    color: PropTypes.string
};

export default NavBar;
