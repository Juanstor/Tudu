import React from 'react';
import { TuduIcon } from './TuduIcon';

function DeleteIcon({ onDelete }) {
  return(
    <TuduIcon
      type="Delete"
      onClick={onDelete}
    /> 
  );
}

export { DeleteIcon };