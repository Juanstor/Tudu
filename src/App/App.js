import React from 'react';
import { AppUI } from './AppUI.js';
import { useLocalStorage } from './useLocalStorage.js';
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

// localStorage.setItem('TUDULIST_V1', JSON.stringify(defaultTudus));
// localStorage.removeItem('TUDULIST_V1');




function App() {
  // Modificandor de TUDUS, el que almacena la lista de Tudus
  const{
    item: tudus,
    saveItem: saveTudus,
    loading,
    error
  } = useLocalStorage ('TUDULIST_V1', []);

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
    <AppUI 
      loading={loading}
      error={error}
      tudus={tudus}
      completedTudus={completedTudus}
      totalTudus={totalTudus}
      progressPercentage={progressPercentage}
      completingTudu={completingTudu}
      deletingTudu={deletingTudu}
    />
  )
  
}

export default App;
