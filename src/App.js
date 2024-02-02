import React from 'react';
import { Header } from './Header/Header';
import { BackgroundImage } from './BackgroundImage/BackgroundImage.js';
import { Card } from './Card/Card.js';
import { TuduTask } from './TuduTask/TuduTask.js';
import { Prueba } from './Prueba/Prueba.js';

const defaultTudu = [
  { text: 'Primer proyecto de portafolio', completed: false },
  { text: 'Completar checkeo medico', completed: true },
  { text: 'Planear ejercicio', completed: true },
  { text: 'Cepillar dientes', completed: true },
];

function App() {
  return (
    <>
      <Header />
      <BackgroundImage />

      <Card completed={8} total={16}>
        {defaultTudu.map(tudu => (
          <TuduTask 
            Key={tudu.text} 
            text={tudu.text}
            completed={tudu.completed}
          />
        ))}
      </Card>

      <Card completed={2} total={3}>
        <TuduTask />
        <TuduTask />
        <TuduTask />
      </Card>
      
      <Prueba />
    </>
  );
}

export default App;
