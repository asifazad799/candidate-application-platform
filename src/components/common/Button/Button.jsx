import React from "react";

import "./button.css";

export function Button({
  label,
  handleClick,
  className,
  labelClassName,
  buttonProps,
}) {
  return (
    <button
      className={`common-button ${className}`}
      onClick={handleClick}
      {...buttonProps}
    >
      <p className={`common-button-label ${labelClassName}`}>
        {label || "Button"}
      </p>
    </button>
  );
}
