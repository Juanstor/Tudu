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


//CUSTOM HOOK for Local Storage and data persistence:
function useLocalStorate (itemName, initialValue) {

  //Reading and saving localStorage
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify([initialValue]));
    parsedItem = [initialValue];
  };
  
  const [item, setItem] = React.useState (parsedItem);
  
  // Persistence, saving Tudus in localStorage and states
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
};

function App() {
  // Modificandor de TUDUS, el que almacena la lista de Tudus
  const[tudus, saveTudus] = useLocalStorate ('TUDULIST_V1', []);

  // Contador de todos los tudus
  const totalTudus = tudus.length;

  // Contador de tudus completados
  const completedTudus = tudus.filter(
    tudu => !!tudu.completed
    ).length;
    
  // Calculating progress bar
  const progressPercentage = ( completedTudus / totalTudus) * 100;

  //Completing a Tudu with the icon check
  const completingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
      (n) => n.text === text
    );
    newTudus[tuduIndex].completed = !newTudus[tuduIndex].completed;
    saveTudus(newTudus);
  };
  
  //Deleting a tudu with the icon X
  const deletingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
        (n) => n.text === text
      );
    newTudus.splice(tuduIndex, 1);
    saveTudus(newTudus);
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
