import React from 'react';
import { TuduIcon } from './TuduIcon';

function DeleteIcon({ onDelete }) {
  return(
    <TuduIcon
      type="Delete"
      color="blue"
      onClick={onDelete}
    /> 
  );
}

export { DeleteIcon };