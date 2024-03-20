import React from 'react';
import './TuduItem.css';
import { CompletedIcon } from "../Icons/CompletedIcon";
import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";

// https://react-icons.github.io/react-icons/icons/pi/


function TuduItem({completed, editing, text, onComplete, onEdit, onDelete, setOpenGrayBG, }) {
  return (
    <li className={`TuduItem ${editing && 'z2'}`}>

      <CompletedIcon 
        completed={completed}
        onComplete={onComplete}
      />

      <p className={` ${completed && "TuduItem-completed"} `}>
        {text}
      </p>

      <EditIcon 
        onEdit={onEdit}
        setOpenGrayBG={setOpenGrayBG}
      />

      <DeleteIcon
        onDelete={onDelete}
      />
      
    </li>

  );
}

export { TuduItem };