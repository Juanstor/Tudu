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
  




  // EDITMODE → after click editIcon (this is for classNames, to put the TuduItem in z-index: 2, hide and show other icons)
  const [editMode, setEditMode] = React.useState(false);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  } 
  
  // Open GrayBG
  const [openGrayBG, setOpenGrayBG] = React.useState(false);
  
  //Editing a Tudu with editIcon
  const editingTudu = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
      (n) => n.text === text
      );
    // newTudus[tuduIndex].style.zIndex = '2';
    // newTudus[tuduIndex].completed = !newTudus[tuduIndex].completed;
    
    
    
    // Crearemos un casi modal, donde el tuduItem a modificar este en z2, un fongo transparente y gris en z1. el tutuItem tendra el espacio de ingresar texto y 2 iconos el chulo y X. 
    // 1) CASI LISTO Crear un estado llamado editMode, donde true= ocultar iconos y pone fondo gris.
    // 2) LISTO hacer la funcion onclick donde ponga true el estado editMode
    // 3) crear iconos chulo y x
    // 4) hacer la funcion onclick en chulo y x para poner false en el modo
    // 5) en chulo, crear la funcion que modifica el tuduitem con el index y cambiar el texto, o reemplazarlo



    console.log('has hecho click en el boton editar');
    console.log(`y has dado click en el index ${tuduIndex}`);
    console.log(`la propiedad editin es ${newTudus[tuduIndex].editing}`);
    newTudus[tuduIndex].editing = !newTudus[tuduIndex].editing;
    console.log(`AHORA ES ${newTudus[tuduIndex].editing}`);
    console.log('Se va a ejecutar toggleEditMoode');
    toggleEditMode();
    console.log('se ejecuto toggleEditMoode');

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