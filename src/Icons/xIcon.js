import React from 'react';
import { TuduIcon } from './TuduIcon';

function XIcon({ onX }) {
  return(
    <TuduIcon
      type="X"
      onClick={onX}
    /> 
  );
}

export { XIcon };