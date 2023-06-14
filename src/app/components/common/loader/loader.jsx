import React from "react";
import style from "./loader.module.css";

const Loader = () => {
    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className={style.shapes}/>
        </div>
    );
};

export default Loader;
