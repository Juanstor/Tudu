import React from 'react';
import { Header } from './Header/Header';
import { BackgroundImage } from './BackgroundImage/BackgroundImage.js';
import { Card } from './Card/Card.js';
import { TuduItem } from './TuduItem/TuduItem.js';
import { Prueba } from './Prueba/Prueba.js';

const defaultTudus = [
  { text: 'Primer proyecto de portafolio', completed: false },
  { text: 'Completar checkeo medico', completed: true },
  { text: 'Planear ejercicio, nada de pereza, just try it!', completed: true },
  { text: 'Cepillar dientes', completed: false },
  { text: 'Adicional Tudu para contar cosas', completed: true },
];


function App() {

  // Contador de tudus
  const[tudus, setTudus] = React.useState(defaultTudus);
  const completedTudus = tudus.filter(
    tudu => !!tudu.completed
  ).length;
  const totalTudus = tudus.length;

  //toggle complete, Completing a Tudu with the icon check
  const completingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
      (tudu) => tudu.text === text
    );
    newTudus[tuduIndex].completed = true;
    setTudus(newTudus);
  };

    //Deleting a tudu with the icon X
    const deletingTudu = (text) => {
      const newTudus = [...tudus];
      const tuduIndex = newTudus.findIndex(
        (tudu) => tudu.text === text
      );
      newTudus.splice(tuduIndex, 1);
      setTudus(newTudus);
    };

    // Ahora es necesario que los dos estados esten en el archivo app para que se pueda comunicar y asi actualice la lista de tareas. Sin embargo hay problemas con el input, ya que se van a cambair todos los textos si se modifica un solo input. Revisar con cuidado.

    //Otra es tambien cambiar el key de texto por otra manera, ya que el input cambia el texto, y el key se pierde.

  return (
    <>
    
      <Header />
      <BackgroundImage />

      <Card title={"Primer TuduCard"} 
        completed={completedTudus} 
        total={totalTudus}
      >
        {defaultTudus.map(tudu => (
          <TuduItem 
            Key={tudu.text} 
            text={tudu.text}
            completed={tudu.completed}
            onComplete={() => completingTudu(tudu.text)}
            onDelete={() => deletingTudu(tudu.text)}
            
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
