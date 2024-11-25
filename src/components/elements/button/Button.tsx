import React, { FC } from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`}
      style={{ marginRight: '8px', padding: '8px 16px' }}
    >
      {label}
    </button>
  );
};

export default Button;
