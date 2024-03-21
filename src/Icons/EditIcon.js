import React from 'react';
import { TuduIcon } from './TuduIcon';

function EditIcon({ onEdit, }) {
  
  return(
    <TuduIcon
      type="Edit"
      onClick={onEdit}
    /> 
  );
}

export { EditIcon };