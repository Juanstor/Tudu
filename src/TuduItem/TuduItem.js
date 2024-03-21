import React from 'react';
import './TuduItem.css';
import { CompletedIcon } from "../Icons/CompletedIcon";
import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";

// https://react-icons.github.io/react-icons/icons/pi/


function TuduItem({completed, editing, text, onComplete, onEdit, onDelete, setOpenGrayBG, }) {
  return (
    <li className={`TuduItem ${editing ? 'z2' : ''}`}>

      <CompletedIcon 
        completed={completed}
        onComplete={onComplete}
      />

      <p className={` ${completed && "TuduItem-completed"} `}>
        {text}
      </p>

      <span className={` ${editing ? 'SIhide' : 'NOhide'}`}>
        <EditIcon 
          onEdit={onEdit}
          setOpenGrayBG={setOpenGrayBG}
        />
      </span>

      <span className={` ${editing ? 'SIhide' : 'NOhide'}`}>
        <DeleteIcon
          onDelete={onDelete}
        />
      </span>

      {/* <span className={` ${editing ? 'SIhide' : 'NOhide'}`}>
        <EditIcon 
          onEdit={onEdit}
          setOpenGrayBG={setOpenGrayBG}
        />
      </span>
      
      <span className={` ${editing ? 'SIhide' : 'NOhide'}`}>
        <DeleteIcon
          onDelete={onDelete}
        />
      </span> */}
      
    </li>

  );
}

export { TuduItem };