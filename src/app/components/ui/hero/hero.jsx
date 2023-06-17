import React from "react";
import style from "./hero.module.css";
import PropTypes from "prop-types";

const Hero = ({ onHandleClick }) => {
    return (
        <div onClick={onHandleClick} className={style.backgroundPic}
             style={{ backgroundImage: "url(./assets/img_hero3.jpg)"}}>
            <div className="container text-white">
                <div className={style.textWidth}>
                    <h1 className={`${style.title} ${style.margin}` }>
                        My name is Natalia Zhelonkina's and it's my website,
                        showcasing portfolio and the technologies I use</h1>
                    <div className="text-white">
                        <h3 className={style.text}>
                            I have a passion for running, yoga,
                            and constantly learning and applying new things in my projects
                        </h3>
                        <h3 className={style.text}>I would like to contribute to the development of renewable energy sources</h3>
                    </div>
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
