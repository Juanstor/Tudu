import React from 'react';
import { TuduIcon } from './TuduIcon';

function MenuIcon({ onShowMenu }) {
  return(
    <TuduIcon
      type="Menu"
      onClick={onShowMenu}
    /> 
  );
}

export { MenuIcon };