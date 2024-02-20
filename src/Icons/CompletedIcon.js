import React from 'react';
import { TuduIcon } from './TuduIcon';

function CompletedIcon({ completed, onComplete }) {
  return(
    <TuduIcon
      type={completed ? 'Completed' : 'Incompleted'}
      onClick={onComplete}
    /> 
  );
}

export { CompletedIcon };