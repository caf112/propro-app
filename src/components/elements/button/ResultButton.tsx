import React from 'react'
import 'styles/Elements.css';
import { ResultButtonProps } from 'models/Types';

const ResultButton: React.FC<ResultButtonProps> = ({label,onClick}) => {
  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default ResultButton