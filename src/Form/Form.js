import React from 'react';
import './Form.css';
import { TuduContext } from '../Context/Context'

function Form() {
  
  const {
    addTudu,
    setOpenModal,
  } = React.useContext(TuduContext);
  const [newTuduValue, setNewTuduValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTudu(newTuduValue);
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTuduValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* <lable>Escribe tu nuevo Tudu</lable> */}
      <textarea 
        placeholder='Just do it!' 
        value={newTuduValue}
        onChange={onChange}
      />

      <div className='Form-buttonContainer'>
        
        <button 
          type='button'
          className='Form-button Form-button-cancel'
          onClick={onCancel}
        >Cancelar
        </button>

        <button 
        type='submit'
          className='Form-button Form-button-add'
        >Agregar
        </button>

      </div>

    </form>
  );
}

export { Form };