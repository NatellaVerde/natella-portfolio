import React, { useEffect, useState } from "react";
import style from "./projects.module.css";
import Project from "./project";
import api2 from "../../../api2";

const Projects = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        let isCancelled = false;
        api2.projects.fetchAll().then((data) => {
            if (!isCancelled) {
                setData(data);
            }
        });
        return () => (isCancelled = true);
    }, [data]);
    return (
        <div style={{ width: "100%" }} className="d-flex align-items-center py-5" id="portfolio">
            <div className="container d-flex flex-column">
                <h2 className={style.sectionTitle}>My projects</h2>
                <ul className={"flex-wrap d-flex w-100 " + style.list}>
                    {
                        data?.map((item) => <Project key={item.id} {...item}/>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Projects;
