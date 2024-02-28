import React from 'react';
import './Menu.css';

function Menu () {
  return (
    <div className='Menu-Container'>
      
      <li className='Menu-item'>
        <p className='Menu-text'>Create Card</p>
      </li>

      <li className='Menu-item'>
        <p className='Menu-text'>About</p>
      </li>

    </div>
  )
}

export { Menu };
