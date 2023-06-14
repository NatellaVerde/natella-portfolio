import React from "react";
import style from "./listTechnologies.module.css";

const ListTechnologies = () => {
    const data = [
        {
            img: "./assets/javascript.svg",
            desc: 'Javascript',
            id: 2
        },
        {
            img: "./assets/react.svg",
            desc: 'React JS',
            id: 6
        },
        {
            img: "./assets/nodejs.svg",
            desc: 'Node JS',
            id: 4
        },
        {
            img: "./assets/mobx.svg",
            desc: 'MobX',
            id: 7
        },
        {
            img: "./assets/redux.svg",
            desc: 'Redux',
            id: 5
        },
        {
            img: "./assets/mongodb.svg",
            desc: 'MongoDb',
            id: 3
        },
        {
            img: "./assets/bootstrap.svg",
            desc: 'Bootstrap',
            id: 1
        }
    ];
    return (
        <div style={{ width: "100%" }} className="d-flex align-items-center">
            <div className="container d-flex align-items-center w-100 py-4">
                <ul className="d-flex justify-content-between align-items-center w-100 m-0">
                    {
                        data?.map((item) =>
                            <li key={item.id} className={style.item + ' ' + style.tooltip} data-tooltip={item.desc}>
                                    <img alt="Pic" src={item.img}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default ListTechnologies;
