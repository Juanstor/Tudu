import './App.css';

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
      
      <MainCosas />
    </div>
  );
}

function MainCosas() {
  return (
    <ul>
      <li >
        <p>
          Hacer la compra semanal de alimentos
        </p>
      </li>
    </ul>
  );
}

export default App;
