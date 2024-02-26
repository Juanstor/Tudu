import React from 'react';
import { TuduIcon } from '../Icons/TuduIcon';
import './LoadingTudu.css';

function LoadingTudu() {
  return (
    <>
      <li className="TuduItem TuduItem-loading">
        <TuduIcon type='Incompleted' />
        <p style={{ textDecoration: 'none' }} className='TuduItem-completed'>
          Loading...
        </p>
      </li>

      <li className="TuduItem TuduItem-loading">
        <TuduIcon type='Incompleted' />
        <p style={{ textDecoration: 'none' }} className='TuduItem-completed'>
          your...
        </p>
      </li>

      <li className="TuduItem TuduItem-loading">
        <TuduIcon type='Incompleted' />
        <p style={{ textDecoration: 'none' }} className='TuduItem-completed'>
          Tudus...
        </p>
      </li>
    </>
  );
}

export { LoadingTudu };