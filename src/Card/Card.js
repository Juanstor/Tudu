import './Card.css';

function Card({ children, total, completed}) {
  return (
    <div className="card">
      <div className="card--header">
        <div className="card--title">
          <h2>Tareas del hogar</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M5.99927 9.53424L11.9993 15.5342L17.9993 9.53424" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="card--progress-bar">
          <div className="card--progress-bar--completed">
          </div>
        </div>
      </div>
      <div className="card--content">
        <ul>
            <li className="tuduItem">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M11.9993 22.5342C17.5221 22.5342 21.9993 18.0571 21.9993 12.5342C21.9993 7.01139 17.5221 2.53424 11.9993 2.53424C6.47642 2.53424 1.99927 7.01139 1.99927 12.5342C1.99927 18.0571 6.47642 22.5342 11.9993 22.5342Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              <p>
                Hacer la compra semanal de alimentos
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M15.9993 9.53424L7.99927 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99927 9.53424L15.9993 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                
            </li>
            <li className="tuduItem">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M11.9993 22.5342C17.5221 22.5342 21.9993 18.0571 21.9993 12.5342C21.9993 7.01139 17.5221 2.53424 11.9993 2.53424C6.47642 2.53424 1.99927 7.01139 1.99927 12.5342C1.99927 18.0571 6.47642 22.5342 11.9993 22.5342Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              <p>
                Limpiar el baño
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M15.9993 9.53424L7.99927 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99927 9.53424L15.9993 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </li>
            <li className="tuduItem">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M11.9993 22.5342C17.5221 22.5342 21.9993 18.0571 21.9993 12.5342C21.9993 7.01139 17.5221 2.53424 11.9993 2.53424C6.47642 2.53424 1.99927 7.01139 1.99927 12.5342C1.99927 18.0571 6.47642 22.5342 11.9993 22.5342Z" fill="#2D9596"/>
                <path d="M21.9993 4.53424L11.9993 14.5442L8.99927 11.5442" stroke="#8DC120" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              <p className="completed">
                Organizar y limpiar el espacio de trabajo y puse el texto mas largo.
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M15.9993 9.53424L7.99927 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99927 9.53424L15.9993 17.5342" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </li>

        </ul>
      </div>
    </div>
  );
}


export { Card };