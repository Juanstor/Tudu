import React from 'react';
import { useLocalStorage } from './useLocalStorage'


const TuduContext = React.createContext();

function TuduProvider({ children }) {
  
  // Modificandor de TUDUS, el que almacena la lista de Tudus
  const{
    item: tudus,
    saveItem: saveTudus,
    loading,
    error
  } = useLocalStorage ('TUDULIST_V1', []);
  
  //Toggle MENU
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const showingMenu = () => {
    setToggleMenu(!toggleMenu);
    console.log("se cambio el valor !toggleMenu");
  }
  
  //Modal (create Tudu)
  const [openModal, setOpenModal] = React.useState(false);


  // Contador de todos los tudus
  const totalTudus = tudus.length;

  // Contador de tudus completados
  const completedTudus = tudus.filter(
    tudu => !!tudu.completed
    ).length;
    
  // Calculating progress bar
  const progressPercentage = ( completedTudus / totalTudus) * 100;

  //Add a Item or Tudu
  const addTudu = (text) => {
    const newTudus = [...tudus];
    newTudus.push({
      text,
      completed: false,
      editing: false,
    });
    saveTudus(newTudus);
  };

  //Completing a Tudu with the icon check
  const completingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
      (n) => n.text === text
    );
    newTudus[tuduIndex].completed = !newTudus[tuduIndex].completed;
    saveTudus(newTudus);
  };
  



  
  
  
  
  
  
  //AQUI EMPIEZA EL DESORDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEN
  // Open GrayBG
  const [openGrayBG, setOpenGrayBG] = React.useState(false);
  
    
  //Editing a Tudu with editIcon
  function editingTudu(text) {
    setOpenGrayBG(state => !state);
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
      (n) => n.text === text
    );

    // newTudus[tuduIndex].completed = !newTudus[tuduIndex].completed;
    
    // Crearemos 2 botones chulo y X, los originales mostraran el fondo transparente, y desapareceran los 2 actuales segun la propiedad editing que esta en cada tuduItem entre true/false, tambien mostraran cuadro de texto para ingresar, un input, y los 2 nuevos botones devolveran todo a la normalidad.
    // 1) ☻crear los iconos
    // 2) ☻Funcion onclick para poner z2 el item, poner fondo y aparecer 2 nuevos iconos.
    // 3) ☻Funcion onclick para los 2 nuevos iconos y deje todo a la normalidad.
    // 4) en chulo, crear la funcion que modifica el tuduitem con el index y cambiar el texto, o reemplazarlo


    console.log('has hecho click en el boton editar');
    console.log(`y has dado click en el index ${tuduIndex}`);
    console.log(`la propiedad editin es ${newTudus[tuduIndex].editing} en el index ${tuduIndex}`);
    console.log('Se cambiara !editing');
    

    newTudus[tuduIndex].editing = !newTudus[tuduIndex].editing;


    console.log(`AHORA ES ${newTudus[tuduIndex].editing}`);


    saveTudus(newTudus);
  }
    
  //AQUI TERMINA EL DESORDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEN






  //Deleting a tudu with the icon X
  const deletingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
      (n) => n.text === text
      );
      newTudus.splice(tuduIndex, 1);
      saveTudus(newTudus);
  };
      
  //CHECKING tudu, to confirm the edition
  const checkingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
      (n) => n.text === text
      );

      newTudus[tuduIndex].editing = !newTudus[tuduIndex].editing;

      console.log(`Diste click en CheckIcon en el index ${tuduIndex}`)
      console.log('Falta guardar el nuevo texto')
      console.log('Falta el imput')
      saveTudus(newTudus);
      setOpenGrayBG(state => !state);
    }

  //CANCELING, to CANCEL the edition
  const xingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
      (n) => n.text === text
      );
      newTudus[tuduIndex].editing = !newTudus[tuduIndex].editing;
      saveTudus(newTudus);
      setOpenGrayBG(state => !state);
    }

  return (
    <TuduContext.Provider value={{
      loading,
      error,
      tudus,
      completedTudus,
      totalTudus,
      progressPercentage,
      addTudu,
      completingTudu,
      editingTudu,
      deletingTudu,
      checkingTudu,
      xingTudu,
      toggleMenu,
      setToggleMenu,
      showingMenu,
      openModal,
      setOpenModal,
      openGrayBG,
      setOpenGrayBG,
    }}>
      {children}
    </TuduContext.Provider>
  );
}

export { TuduContext, TuduProvider };
















// import { useLocalStorage } from '../Context/useLocalStorage.js';

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