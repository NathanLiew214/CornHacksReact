import React from "react";

//import "./Styles/FormInput.css";

import Type from "Atoms/Type";

const FormInput = ({
    formId,
    children,
    className,
    required,
    placeholder,
    labelColor,
}) => {
    formId = formId || children;
    return (
        <>
            <Type size="p" bold color={labelColor}>
                {children}
            </Type>
            <input
                id={formId}
                className={className ? `${className} form-input` : "form-input"}
                required={required}
                placeholder={placeholder}
            />
        </>
    );
};

export default FormInput;
