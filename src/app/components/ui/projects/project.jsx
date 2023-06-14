import React from "react";
import style from "./projects.module.css";
import PropTypes from "prop-types";

const Project = ({ link, img, title, description }) => {
  return (
      <li style={{ position: "relative", marginBottom: "20px" }}>
          <a rel="stylesheet" href={link}>
              <div className={style.item}>
                  <img alt="Pic" src={img} />
              </div>
              <div className={style.background}>
                  <span className={style.title}>{title}</span>
                  <span className={style.subtitle}>{description}</span>
              </div>
          </a>
      </li>
  );
};

Project.propTypes = {
    link: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Project;
