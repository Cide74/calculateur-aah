import React from 'react';


import './Calculator.scss';

export default function Calculator() {






  return (
    <div ClassName='calculateur'>
      <h1>je suis le calculateur</h1>
      <form className='form'>
        <input 
          type="text"
          ClassName='field'
          onChange
          value="le state"
          onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        />
      </form>
    </div>
  );
}

