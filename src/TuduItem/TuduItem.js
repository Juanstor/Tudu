import React from 'react';
import './TuduItem.css';
import { CompletedIcon } from "../Icons/CompletedIcon";
import { IncompletedIcon } from "../Icons/Incompleted";
import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { PiCheckCircleThin, PiCircleDashedThin, PiTrashThin, PiPencilSimpleLineThin, } from "react-icons/pi";
// https://react-icons.github.io/react-icons/icons/pi/


function TuduItem({completed, text, onComplete, onDelete}) {
  return (
    <li className="TuduItem">

      <IncompletedIcon onClick={onComplete}/>
      <CompletedIcon />
{/* 
      <PiCheckCircleThin onClick={onComplete}/>
      <PiCircleDashedThin onClick={onComplete}/> */}

      <p className={` ${completed && "TuduItem-completed"} `}>
        {text}
      </p>

      <EditIcon />
      {/* <PiPencilSimpleLineThin fill="var(--gray3)"/> */}

      <DeleteIcon onClick={onDelete}/>
      {/* <PiTrashThin fill="var(--gray3)" onClick={onDelete}/> */}
      
    </li>

  );
}

export { TuduItem };