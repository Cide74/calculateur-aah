import React from 'react';


import './Calculator.scss';

export default function Calculator() {






  return (
    <div ClassName='calculateur'>
      <h1>je suis le calculateur</h1>
      <form className='form'>
        <p>les revenus du foyer</p>
        <input 
          type='number'
          ClassName='field-input'
          onChange= ''
          value=""
          //onChange={handleChange}
          placeholder='Revenu P1 '
          name='revenu1'
        />
                <input 
          type='number'
          ClassName='field-input'
          onChange= ''
          value=""
          //onChange={handleChange}
          placeholder='Revenu P2 '
          name='revenu1'
        />
      </form>
    </div>
  );
}

