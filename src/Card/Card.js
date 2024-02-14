import React from 'react';
import './Card.css';
import { PiCaretRightBold, } from "react-icons/pi";


function Card({ text, children, total, completed, title }) {

  return (
    <section className="card">

      <div className="card--header">
        <div className="card--title">

          <h2>{title}</h2>

          <PiCaretRightBold fill='var(--white)'/>

        </div>
        <div className="card--progress-bar">
          <p>
            {completed} / {total}
          </p>

          <div 
            className="card--progress-bar--completed"

          >
          </div>
        </div>
      </div>

      <div className="card--content">
        {children}
      </div>

    </section>
  );
}


export { Card };