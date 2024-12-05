import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChangeButtonProps } from 'models/Types';
import { Button } from "@mui/material"

const ChangeButton: React.FC<ChangeButtonProps> = ({path,label}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };
  return (
    <div>
        <Button onClick={handleClick} variant="contained" >{label}</Button>
    </div>
  )
}

export default ChangeButton