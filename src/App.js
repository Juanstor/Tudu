import React from 'react';
import { Header } from './Header/Header';
import { BackgroundImage } from './BackgroundImage/BackgroundImage.js';
import { Card } from './Card/Card.js';
import { TuduItem } from './TuduItem/TuduItem.js';
import { Prueba } from './Prueba/Prueba.js';

const defaultTudu = [
  { text: 'Primer proyecto de portafolio', completed: false },
  { text: 'Completar checkeo medico', completed: true },
  { text: 'Planear ejercicio, nada de pereza, just try it!', completed: true },
  { text: 'Cepillar dientes', completed: false },
];


function App() {

  // Contador de Tudus
  // const[tudu, setCountTudus] = React.useState('defaultTudu');

  return (
    <>
    
      <Header />
      <BackgroundImage />

      <Card title={"Primer TuduCard"} completed={8} total={16}>
        {defaultTudu.map(tudu => (
          <TuduItem 
            Key={tudu.text} 
            text={tudu.text}
            // completed={completedTudus}
            
            // itemText={itemText}
            // setItemText={setItemText}
            
          />
        ))}
      </Card>

      <Card title={"Segundo TuduCard"} completed={2} total={3}>
        <TuduItem />
        <TuduItem />
        <TuduItem />
      </Card>
      
      <Prueba />
    </>
  );
}

export default App;
