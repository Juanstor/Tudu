import React from 'react';
import './Prueba.css';

function Prueba() {
  let [itemText, setItemText] = React.useState('');
  
  return (
    <>

      <h1>
        Inicio de prueba
      </h1>

      <input 
        type='text' 
        placeholder="Write here" 
        onChange={(event) => {
          setItemText(event.target.value);
          console.log(`escribiste en el imputla prueba lo siguiente + ${event.target.value}`);
        }}
      />

    </>

  );
}

export { Prueba };