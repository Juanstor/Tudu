import React from 'react';
import { Header } from './Header/Header';
import { BackgroundImage } from './BackgroundImage/BackgroundImage.js';
import { Card } from './Card/Card.js';
import { TuduItem } from './TuduItem/TuduItem.js';
import { Prueba } from './Prueba/Prueba.js';

// let myTuduList = {
//   1: [
//     { id: 1, nombre: 'Elemento 1', descripcion: 'Descripción del elemento 1' },
//     { id: 2, nombre: 'Elemento 2', descripcion: 'Descripción del elemento 2' }
//   ],
//   2: [
//     { id: 3, nombre: 'Elemento 3', descripcion: 'Descripción del elemento 3' },
//     { id: 4, nombre: 'Elemento 4', descripcion: 'Descripción del elemento 4' }
//   ]
// };

// let defaultTudus = [
//   { id: 1, text: 'Primer proyecto de portafolio', completed: false },
//   { id: 2, text: 'Completar checkeo medico', completed: true },
//   { id: 3, text: 'Planear ejercicio, nada de pereza, just try it!', completed: true },
//   { id: 4, text: 'Cepillar dientes', completed: false },
//   { id: 5, text: 'Adicional Tudu para contar cosas', completed: true },
// ];

// localStorage.setItem('TUDULIST_V1', defaultTudus);
// localStorage.removeItem('TUDULIST_V1');




function App() {
  //Reading and saving localStorage
  const localStorageStringTudus = localStorage.getItem('TUDULIST_V1');
  let parsedTudus;

  if (localStorageStringTudus) {
    parsedTudus = JSON.parse(localStorageStringTudus);
  } else {
    localStorage.setItem('TUDULIST_V1', JSON.stringify([]));
    parsedTudus = [];
  };
  
  // Modificandor de TUDUS, el que almacena la lista de Tudus
  const[tudus, setTudus] = React.useState(parsedTudus);

  // Contador de todos los tudus
  const totalTudus = tudus.length;

  // Contador de tudus completados
  const completedTudus = tudus.filter(
    tudu => !!tudu.completed
    ).length;
    
  // Calculating progress bar
  const progressPercentage = ( completedTudus / totalTudus) * 100;

  // Persistence, saving Tudus in localStorage
    const savingTudusLS = (newTudus) => {
      localStorage.setItem('TUDULIST_V1', JSON.stringify(newTudus));
      setTudus(newTudus);
    };

  //Completing a Tudu with the icon check
  const completingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
      (n) => n.text === text
    );
    newTudus[tuduIndex].completed = !newTudus[tuduIndex].completed;
    savingTudusLS(newTudus);
  };
  
  //Deleting a tudu with the icon X
  const deletingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
        (n) => n.text === text
      );
    newTudus.splice(tuduIndex, 1);
    savingTudusLS(newTudus);
  };

  return (
    <>
      <Header />
      <BackgroundImage />

      <Card title={"Primer TuduCard"} 
        completed={completedTudus} 
        total={totalTudus}
        percentage={progressPercentage}
        // progress={progressBar}
      >
        {tudus.map(tudu => (
          <TuduItem 
            Key={tudu.text}
            text={tudu.text}
            completed={tudu.completed}
            onComplete={() => completingTudu(tudu.text)}
            onDelete={() => deletingTudu(tudu.text)}
          />
        ))}
      </Card>
      
      <Prueba />
    </>
  );
}

export default App;
