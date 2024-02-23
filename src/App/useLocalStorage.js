import React from 'react';

//CUSTOM HOOK for Local Storage and data persistence:
function useLocalStorage (itemName, initialValue) {

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

export { useLocalStorage };