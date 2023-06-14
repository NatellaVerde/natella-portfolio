import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, name, value, placeholder, onChange, error }) => {
    const [isDirty, setDirty] = useState(false);
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    useEffect(() => {
        setDirty(false);
    }, [value]);
    const onHandleBlur = () => {
        setDirty(true);
    };
    const getInputClasses = () => {
        return "form-control" + (error && isDirty ? " is-invalid" : "");
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}> {label}</label>
            <div className="input-group has-validation">
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={onHandleBlur}
                    className={getInputClasses()}
                />

                {isDirty && error && <div className="invalid-feedback ">{error}</div>}
            </div>
        </div>
    );
};
TextAreaField.defaultProps = {
    type: "text"
};
TextAreaField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    error: PropTypes.string
};

export default TextAreaField;
