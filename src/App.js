import React from 'react';
import { Header } from './Header/Header';
import { BackgroundImage } from './BackgroundImage/BackgroundImage.js';
import { Card } from './Card/Card.js';
import { TuduTask } from './TuduTask/TuduTask.js';
import { Prueba } from './Prueba/Prueba.js';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BackgroundImage />

      <Card completed={8} total={16}>
        <TuduTask />
        <TuduTask />
        <TuduTask />
      </Card>

      <Card completed={2} total={3}>
        <TuduTask />
        <TuduTask />
        <TuduTask />
      </Card>
      
      <Prueba />
    </React.Fragment>
  );
}

export default App;
