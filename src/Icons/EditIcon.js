import React from 'react';
import { TuduIcon } from './TuduIcon';

function EditIcon({ onEdit, setOpenGrayBG }) {
  
  const handleClick = () => {
    onEdit();
    setOpenGrayBG(state => !state);
  };

  return(
    <TuduIcon
      type="Edit"
      onClick={handleClick}
    /> 
  );
}

export { EditIcon };