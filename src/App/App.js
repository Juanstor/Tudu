import React from 'react';
import { TuduProvider } from '../Context/Context.js'
import { AppUI } from './AppUI.js';

function App() {
  return (
    <TuduProvider>
      <AppUI />
    </TuduProvider>
  )

}

export default App;
