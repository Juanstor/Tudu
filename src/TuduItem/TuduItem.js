import React from 'react';
import './TuduItem.css';
import { CompletedIcon } from "../Icons/CompletedIcon";
import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { CheckIcon } from '../Icons/CheckIcon';
import { XIcon } from '../Icons/xIcon';


// https://react-icons.github.io/react-icons/icons/pi/


function TuduItem({completed, editing, text, onComplete, onEdit, onDelete, onCheck, onX, setOpenGrayBG, }) {
  return (
    <li className={`TuduItem ${editing ? 'z2' : ''}`}>

      <CompletedIcon 
        completed={completed}
        onComplete={onComplete}
      />

      <span className={` ${editing ? 'NOhide' : 'SIhide'}`}>
      <input
        type="text"
        // value={taskText}
        // onChange={handleChange}
        placeholder={text}
      />
      </span>

      <p className={` ${completed && "TuduItem-completed"} ${editing ? 'hide' : ''}`}>
        {text}
      </p>

      <span className={` ${editing ? 'hide' : ''}`}>
        <EditIcon 
          onEdit={onEdit}
          setOpenGrayBG={setOpenGrayBG}
        />
      </span>

      <span className={` ${editing ? 'hide' : ''}`}>
        <DeleteIcon
          onDelete={onDelete}
        />
      </span>

      <span className={` ${editing ? '' : 'hide'}`}>
        <CheckIcon 
          onCheck={onCheck}
          // setOpenGrayBG={setOpenGrayBG}
        />
      </span>
      
      <span className={` ${editing ? '' : 'hide'}`}>
        <XIcon
          onX={onX}
        />
      </span>
      
    </li>

  );
}

export { TuduItem };