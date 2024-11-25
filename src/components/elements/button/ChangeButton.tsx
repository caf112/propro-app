import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChangeButtonProps } from 'models/Types';

const ChangeButton: React.FC<ChangeButtonProps> = ({path,label}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };
  return (
    <div>
        <button onClick={handleClick}>{label}</button>
    </div>
  )
}

export default ChangeButton