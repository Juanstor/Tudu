import React from 'react';
import { TuduIcon } from './TuduIcon';

function IncompletedIcon({ completed, onComplete }) {
  return(
    <TuduIcon
      type={completed ? 'Completed' : 'Incompleted'}
      onClick={onComplete}
    /> 
  );
}

export { IncompletedIcon };