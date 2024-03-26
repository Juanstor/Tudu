import React from 'react';
import { TuduIcon } from './TuduIcon';

function CheckIcon({ onCheck }) {
  return(
    <TuduIcon
      type="Check"
      onClick={onCheck}
    /> 
  );
}

export { CheckIcon };