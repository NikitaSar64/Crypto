import React from 'react';
import { FC } from "react";

import inputIcon from "@assets/images/inputicon.svg";

import inputStyle from "./Input.module.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<InputProps> = ({
  value,
  onChange,
  className = "",
  disabled = false,
  type = "text",
  ...other
}) => {
  return (
    <div className={inputStyle.inputWrapper}>
      <img
        className={inputStyle.input__icon}
        src={inputIcon}
        alt="search-icon"
      />
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={inputStyle.input}
        disabled={disabled}
        {...other}
      />
    </div>
  );
};

export default Input;
