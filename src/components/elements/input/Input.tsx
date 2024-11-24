import React, { FC, ChangeEvent } from 'react';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const Input: FC<InputProps> = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  disabled = false,
  className = '',
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`input ${className}`}
    />
  );
};

export default Input;
