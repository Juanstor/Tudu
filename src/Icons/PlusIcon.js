import React from 'react';
import { TuduIcon } from './TuduIcon';

function PlusIcon({ onAddTudu }) {
  return(
    <TuduIcon
      type="Plus"
      onClick={onAddTudu}
    /> 
  );
}

export { PlusIcon };