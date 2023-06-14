import React from "react";
import style from "./promoQuote.module.css";

const PromoQuote = () => {
    return (
        <div className="d-flex align-items-center py-5 w-100">
            <div className="position-relative container d-flex w-100 justify-content-center align-items-center" style={{ background: "#F8F4EF" }}>
                <div className="position-absolute" style={{ width: "283px", height: "182px", right: "0", bottom: "0" }}>
                    <img src="./assets/decorate.svg" alt="img decor" width="100%" height="100%"/>
                </div>
                <div className="d-flex flex-column justify-content-center my-5" style={{ width: "65%", margin: "50px 0" }}>
                    <h2 className={style.title}>
                        <div className="position-absolute" style={{ width: "56px", height: "45px", top: "-10px", left: "-30px" }}>
                            <img src="./assets/quotes.svg" alt="img quotes" width="100%" height="100%"/>
                        </div>
                        Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.
                        <br/>
                        And the only way to do great work is to love what you do.
                    </h2>
                    <p className={style.text}>Steve Jobs</p>
                </div>
            </div>
        </div>
    );
};

export default PromoQuote;
