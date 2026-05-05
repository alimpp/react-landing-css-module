import StyleModule from "./styles/index.module.css";

import React from "react";

const BaseInput = ({ label, error, placeholder, ...props }) => {
  const inputId = React.useId();

  return (
    <div className="flex flex-column">
      {label && (
        <label className={StyleModule.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        id={inputId}
        className={`
          ${StyleModule.baseInput}
          ${error ? `${StyleModule.errorState}` : ""}
          ${props.className || ""}
        `}
        {...props}
      />
      {error && <p className={StyleModule.textError}>{error}</p>}
    </div>
  );
};

export default BaseInput;
