import './Card.css';

function Card({ text, children, total, completed, title }) {
  return (
    <section className="card">

      <div className="card--header">
        <div className="card--title">

          <h2>{title}</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M5.99927 9.53424L11.9993 15.5342L17.9993 9.53424" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
        <div className="card--progress-bar">

          <p>
            Has completado {completed} de {total} TuduTask.
          </p>
          <div className="card--progress-bar--completed"/>

        </div>
      </div>

      <div className="card--content">
        {children}
      </div>

    </section>
  );
}


export { Card };