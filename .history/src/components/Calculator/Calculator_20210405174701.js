import React from 'react';


import './Calculator.scss';

export default function Calculator() {






  return (
    <div className='calculateur'>
      <h1>Bienvenu dans le calculateur</h1>
        <form className="form">
          <p>votre situation</p>
          <div className='form-situation'>
            <input 
              type='text'
              className='form-situation-switch'
              onChange= ''
              value="Les revenus du foyer : (n-2)"
              name='revenu-text'
            />


  <input id="e" type="checkbox">
  <label for="e">
    <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
    <div class="can-toggle__label-text">.can-toggle.demo-rebrand-2</div>
  </label>
















          </div>
        </form>
      <form className='form'>
        <div className="field-revenu">
          <input 
            type='text'
            className='field-input-revenu-text'
            onChange= ''
            value="Les revenus du foyer : (n-2)"
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

