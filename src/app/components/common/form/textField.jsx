import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isDirty, setDirty] = useState(false);
    const onHandleBlur = () => {
       setDirty(true);
    };
    useEffect(() => {
        setDirty(false);
    }, [value]);
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "form-control" + (error && isDirty ? " is-invalid" : "");
    };
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}> {label}</label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    onBlur={onHandleBlur}
                    className={getInputClasses()}
                />

                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}/>
                    </button>
                )}
                {isDirty && error && <div className="invalid-feedback ">{error}</div>}
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    handleBlur: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
