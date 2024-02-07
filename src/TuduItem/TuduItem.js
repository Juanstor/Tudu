import React from 'react';
import './TuduItem.css';

function TuduItem({completed, text,}) {

  let [itemText, setItemText] = React.useState('');

  return (
    <li className="TuduItem">

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="24 25" fill="none">
        <path d="M11.9993 22.5342C17.5221 22.5342 21.9993 18.0571 21.9993 12.5342C21.9993 7.01139 17.5221 2.53424 11.9993 2.53424C6.47642 2.53424 1.99927 7.01139 1.99927 12.5342C1.99927 18.0571 6.47642 22.5342 11.9993 22.5342Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <input 
        type='text' 
        placeholder="Write here" 
        className={` ${completed && "TuduItem-completed"} `}
        value={itemText}
        onChange={(event) => {
          console.log("escribiste en el imput")
          setItemText(event.target.value);
        }}

      />

      <p>
        {text}
      </p>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15.9993 9.53424L7.99927 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.99927 9.53424L15.9993 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>  

    </li>

  );
}

export { TuduItem };