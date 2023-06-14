import React from "react";
import style from "./hero.module.css";
import PropTypes from "prop-types";

const Hero = ({ onHandleClick }) => {
    return (
        <div onClick={onHandleClick} className={style.backgroundPic} style={{ backgroundImage: "url(./assets/rectangle.png)" }}>
            <div className="container text-white">
                <h1 className={style.title}>
                    This is Natalia Zhelonkina's website, showcasing portfolio and the technologies <br/>
                    I use</h1>
                <div className="text-white">
                    <h3>
                        I have a passion for running, yoga, <br/>
                        and constantly learning and applying new things in my projects
                    </h3>
                </div>
            </div>
            <div className={style.block}>
                <div className={style.block__title}>For partners</div>
                <div className={style.block__text}>If you are interesting in collaboration, please, feel free to send me message</div>
                <div className={style.block__btn}>
                    <a
                        style={{ color: "inherit", textDecoration: "none" }}
                        aria-current="page"
                        href="#id-promo"
                    >
                        Go to the contacts
                    </a>
                </div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    onHandleClick: PropTypes.func
};

export default Hero;
