import React from 'react';
import { TuduIcon } from './TuduIcon';

function PlusIcon({ setOpenModal }) {
  return(
    <TuduIcon
      type="Plus"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    /> 
  );
}

export { PlusIcon };