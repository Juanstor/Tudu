import './App.css';
import { Header } from './Header/Header';
import { BackgroundImage } from './BackgroundImage/BackgroundImage.js';
import { Card } from './Card/Card.js';
import { TuduTask } from './TuduTask/TuduTask.js';
import { Prueba } from './Prueba/Prueba.js';

function App() {
  return (
    <div className="App">
      <Header />
      <BackgroundImage />

      <Card>
        <TuduTask />
        <TuduTask />
        <TuduTask />
      </Card>
      
      <Prueba />
    </div>
  );
}

export default App;
