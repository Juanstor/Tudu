import './Card.css';

function Card({ children, total, completed}) {
  return (
    <ul className='card'>
      <h2>
        Aquí estará la barra de progreso.
      </h2>
      <p>
        De {total} TuduTask has hecho {completed} Task
      </p> 
      {children}
    </ul>
  );
}


export { Card };