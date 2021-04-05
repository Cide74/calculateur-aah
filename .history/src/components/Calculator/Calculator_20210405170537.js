import React from 'react';


import './Calculator.scss';

export default function Calculator() {






  return (
    <div ClassName='calculateur'>
      <h1>je suis le calculateur</h1>
      <form className='form'>
        <input 
          type="text"
          ClassName='field-input'
          onChange
          value="le state"
          onChange='{handleChange}'
          id='1234'
        placeholder={placeholder}
        name={name}
        />
      </form>
    </div>
  );
}

