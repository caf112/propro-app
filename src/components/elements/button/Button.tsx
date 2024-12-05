import React, { FC } from 'react';
import 'styles/Elements.css';
import { Button } from "@mui/material"


interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const ButtonTemp: FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  // disabled = false,
  // className = '',
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      // disabled={disabled}
      // className={`button ${className}`}
    >
      {label}
    </Button>
  );
};

export default ButtonTemp;
