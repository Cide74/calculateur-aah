import React from 'react';


import './Calculator.scss';

export default function Calculator() {






  return (
    <div ClassName='calculateur'>
      <h1>je suis le calculateur</h1>
        <form>
          <p></p>
        </form>


      <form className='form'>
        <div className="field-revenu">
          <input 
            type='text'
            className='field-input-revenu'
            onChange= ''
            value="Les revenus du foyer"
            name='revenu-text'
          />
          <input 
            type='number'
            className='field-input-revenu'
            onChange= ''
            value=""
            //onChange={handleChange}
            placeholder='Revenu P1 '
            name='revenu1'
          />
          <input 
            type='number'
            className='field-input-revenu'
            onChange= ''
            value=""
            //onChange={handleChange}
            placeholder='Revenu P2 '
            name='revenu1'
          />
        </div>
      </form>
    </div>
  );
}

