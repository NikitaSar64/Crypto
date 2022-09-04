import { FC } from "react";

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
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="1"
      disabled={disabled}
      {...other}
    />
  );
};

export default Input;