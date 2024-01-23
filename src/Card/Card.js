function Card({ children, total, completed}) {
  return (
    <ul>
      <h1>
        _______________________________________________
      </h1>
      <h2>
        Aquí estará la barra de progreso.
      </h2>
      <p>
        De {total} TuduTask has hecho {completed} Task
      </p> 
      {children}
      <h1>
        _______________________________________________
      </h1>
    </ul>
  );
}


export { Card };