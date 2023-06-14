import React from "react";
import style from "./promo.module.css";

const Promo = () => {
    return (
        <div id="id-promo" style={{ width: "100%", backgroundRepeat: "no-repeat", backgroundColor: "#497557", backgroundImage: "url(./assets/tree.svg)" }} className="d-flex align-items-center py-5">
            <div className="container d-flex w-100 justify-content-end align-items-center">
                <div className="d-flex flex-column justify-content-center w-30 my-5">
                    <span className={style.tag}>For Recruiters</span>
                    <h2 className={style.title}>Reach our goals together</h2>
                    <p className={style.subtitle}>Learn more about me on &nbsp;
                        <a href="https://www.linkedin.com/in/natalia-zhelonkina/" className={style.link}>LinkedIn profile</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Promo;
