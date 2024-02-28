import React from 'react';
import './TuduItem.css';
import { CompletedIcon } from "../Icons/CompletedIcon";
import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
// https://react-icons.github.io/react-icons/icons/pi/


function TuduItem({completed, text, onComplete, onDelete}) {
  return (
    <li className="TuduItem">

      <CompletedIcon 
        completed={completed}
        onComplete={onComplete}
      />

      <p className={` ${completed && "TuduItem-completed"} `}>
        {text}
      </p>

      <EditIcon 
        // onComplete={onComplete}
      />

      <DeleteIcon
        onDelete={onDelete}
      />
      
    </li>

  );
}

export { TuduItem };