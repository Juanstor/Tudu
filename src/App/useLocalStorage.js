import React from 'react';

//CUSTOM HOOK for Local Storage and data persistence:
function useLocalStorage (itemName, initialValue) {

  const [item, setItem] = React.useState (initialValue);
  const [loading, setLoading] = React.useState (true);
  const [error, setError] = React.useState (false);
  
  React.useEffect(() => {

    setTimeout(() => {
      try {
        //Reading and saving localStorage
        const localStorageItem = localStorage.getItem(itemName);
      
        let parsedItem;
  
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify([initialValue]));
          parsedItem = [initialValue];
        };
  
        setLoading(false);
      
      } catch (error){
      setLoading(false);
      setError(error);
      }
    }, 1000);

  }, []); 
  
  // Persistence, saving Tudus in localStorage and states
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item, 
    saveItem,
    loading,
    error,
  };
};

export { useLocalStorage };