import React from 'react';


import './Calculator.scss';

export default function Calculator() {






  return (
    <div ClassName='calculateur'>
      <h1>je suis le calculateur</h1>
      <form className='form'>
        <input 
          type="number"
          ClassName='field-input'
          onChange= ''
          value=""
          //onChange={handleChange}
          placeholder='Revenu 1'
          name='revenu1'
        />
      </form>
    </div>
  );
}

