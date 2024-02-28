import React from 'react';
import './Card.css';
import { ArrowIcon } from '../Icons/ArrowIcon';
import { PlusIcon } from '../Icons/PlusIcon';

function Card({ text, children, total, completed, title, percentage }) {

  return (
    <section className="card">

      <div className="card--header">
        <div className="card--title">

          <h2>{title}</h2>

          <PlusIcon />
          <ArrowIcon />

        </div>

        <div className="card--progress-bar">
          <p>
            {completed} / {total}
          </p>

          <div 
            className="card--progress-bar--completed"
            style={{ width: `${percentage}%` }}
          />

        </div>
      </div>

      <div className="card--content">
        {children}
      </div>


    </section>
  );
}


export { Card };