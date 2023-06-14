import React from "react";
import NavBar from "../../ui/navBar/navBar";
import PropTypes from "prop-types";
import style from "./header.module.css";

const Header = ({ color, isActive, onHandleClick }) => {
    return (
        <div className={"navbar position-absolute w-100 h-10 " + style.header__zIndex}>
            <div className="container">
                <div className="nav-link p-0" aria-current="page" >
                    <h4 style={{ color: `${color}` }}>Natella</h4>
                </div>
                <button onClick={ () => onHandleClick() } className={"btn " + style.visible} style={{ color: `${color}`, fontSize: "24px" }}>
                    {isActive ? <i className="bi bi-toggle-on"/> : <i className="bi bi-toggle-off"/>}
                </button>
                <NavBar color={color}/>
            </div>
        </div>
    );
};

Header.propTypes = {
    color: PropTypes.string,
    isActive: PropTypes.bool,
    onHandleClick: PropTypes.func
};

export default Header;
