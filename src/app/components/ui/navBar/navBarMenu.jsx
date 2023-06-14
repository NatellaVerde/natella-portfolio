import React from "react";
import PropTypes from "prop-types";
import style from "./navBarMenu.module.css";

const NavBarMenu = ({ color }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: 0, top: 0, bottom: 0, background: "rgb(12, 74, 52)", height: "50vh", width: "100vw", zIndex: 10 }}>
            <nav className={"navbar d-flex flex-column-reverse " + style.visible}>
                { (
                <ul className="nav d-flex flex-column" style={{ color: `${color}` }}>
                    <li className="nav-item">
                        <a
                            className="nav-link "
                            href="#portfolio"
                            style={{ color: "inherit", cursor: "pointer" }}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link "
                            href="#feedback"
                            style={{ color: "inherit", cursor: "pointer" }}
                        >
                            Feedback
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link "
                            href="#id-promo"
                            style={{ color: "inherit", cursor: "pointer" }}
                        >
                            Contacts
                        </a>
                    </li>
                </ul>
                )}
            </nav>
        </div>
    );
};

NavBarMenu.propTypes = {
    color: PropTypes.string
};

export default NavBarMenu;
