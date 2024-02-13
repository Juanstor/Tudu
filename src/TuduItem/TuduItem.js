import React from 'react';
import './TuduItem.css';
import { CiCircleCheck, CiEdit, CiTrash  } from "react-icons/ci";
// https://react-icons.github.io/react-icons/icons/ci/

function TuduItem({completed, text, onComplete, onDelete}) {
  return (
    <li className="TuduItem">

      <CiCircleCheck onClick={onComplete}/>

      {/* <svg 
        
        xmlns="http://www.w3.org/2000/svg" 
        width="25" 
        height="25" 
        viewBox="0 0 25 25" 
        fill="none">
        <path d="M11.9993 22.5342C17.5221 22.5342 21.9993 18.0571 21.9993 12.5342C21.9993 7.01139 17.5221 2.53424 11.9993 2.53424C6.47642 2.53424 1.99927 7.01139 1.99927 12.5342C1.99927 18.0571 6.47642 22.5342 11.9993 22.5342Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> */}

      <p className={` ${completed && "TuduItem-completed"} `}>
        {text}
      </p>

      <CiEdit />

      {/* <svg 
        width="25" 
        height="25" 
        viewBox="0 0 25 25" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z" 
          fill="#909090"/>
          
      </svg> */}

      <CiTrash onClick={onDelete}/>


      {/* <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="25" 
        height="25" 
        viewBox="0 0 25 25" 
        fill="none">
        <path d="M15.9993 9.53424L7.99927 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.99927 9.53424L15.9993 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>   */}
      
    </li>

  );
}

export { TuduItem };