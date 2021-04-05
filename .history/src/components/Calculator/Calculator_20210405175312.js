import React from 'react';
import { Radio } from 'semantic-ui-react'

import './Calculator.scss';
import 'semantic-ui-css/semantic.min.css'

export default function Calculator() {





const RadioExampleToggle = () => <Radio toggle />





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

