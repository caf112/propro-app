import React from 'react'
import { ResultButtonProps } from 'models/Types';

const ResultButton: React.FC<ResultButtonProps> = ({label,onClick}) => {
  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default ResultButton