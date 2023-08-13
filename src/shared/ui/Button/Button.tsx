import classNames from "classnames";
import React, { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

import styles from "./Button.module.css";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: MouseEventHandler;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled,
}) => {
  return (
    <button
      className={classNames(styles.btn, styles[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
