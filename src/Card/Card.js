import React from 'react';
import './Card.css';
import { ArrowIcon } from '../Icons/ArrowIcon';
import { PlusIcon } from '../Icons/PlusIcon';

function Card({ children, total, completed, title, percentage, setOpenModal }) {

  return (
    <section className="card">

      <div className="card--header">
        <div className="card--title">

          <h2>{title}</h2>

          <PlusIcon 
            setOpenModal={setOpenModal}
          />
          <ArrowIcon 
            // setToggleItems={setToggleItems}
          />

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