import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import { validator } from "../../../utils/validator";
import style from "./contacts.module.css";
import TextAreaField from "../../common/form/textAreaField";

const ContactsForm = () => {
    const initialState = {
        name: "",
        email: "",
        text: ""
    };
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Please enter your name. This field is required."
            },
            min: {
                message: "Name must have a minimum of 3 characters",
                value: 3
            }
        },
        email: {
            isRequired: {
                message: "Please enter your email address in the email field. This field is required."
            },
            isEmail: {
                message: "The email provided was incorrect, please enter a valid email address."
            }
        },
        text: {
            isRequired: {
                message: "Please enter your message. This field is required."
            },
            min: {
                message: "Name must have a minimum of 1 characters",
                value: 1
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const clearForm = () => {
        setData(initialState);
        setErrors({});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return;
        }
        console.log(data);
        clearForm();
    };
    return (
        <div style={{ width: "100%", background: "#F1F3EF" }} className="d-flex align-items-center py-5" id="feedback">
            <div className="container d-flex flex-column w-100 align-items-center">
                <div className="d-flex flex-column align-items-center justify-content-center w-75">
                    <span>Stay In Touch</span>
                    <h2 className={style.title}>We are growing soon!</h2>
                    <h3 className={style.subtitle}>Leave your feedback and let&apos;s work together to improve this app.</h3>
                </div>
                <form onSubmit={handleSubmit} className={style.form}>
                    <TextField
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Put your name here..."
                        value={data.name}
                        onChange={handleChange}
                        error={errors.name}/>
                    <TextField
                        label="Email"
                        type="text"
                        name="email"
                        placeholder="Put your email address here..."
                        value={data.email}
                        onChange={handleChange}
                        error={errors.email}/>
                    <TextAreaField
                        label="Text"
                        type="text"
                        name="text"
                        placeholder="Since there is no mail server configured here, please send the emails to n.zhelonkina@outlook.com"
                        value={data.text}
                        onChange={handleChange}
                        error={errors.text}/>
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="btn mx-auto my-5"
                        style={{ background: "#0C4A34", color: "white" }}
                    >
                        Stay in Touch
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactsForm;
