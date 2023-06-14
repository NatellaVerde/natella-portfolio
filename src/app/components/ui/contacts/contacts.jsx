import React from "react";
import style from "./contects.module.css";

const Contacts = () => {
  return (
      <div style={{ background: "#0C4A34", color: "white" }}>
          <div className={"container d-flex justify-content-between align-items-center my-3 " + style.direct}>
              <div>
                  Email:
                  <a href="mailto:n.zhelonkina@outlook.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>  n.zhelonkina@outlook.com</a>
              </div>
              <div>
                  Calgary, AB, Canada
              </div>
          </div>
      </div>
  );
};

export default Contacts;
