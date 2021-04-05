import React from 'react';
import { Button } from 'semantic-ui-react'

import './Calculator.scss';

export default function Calculator() {

  return (
    <div className='calculateur'>

      

      <h1>Bienvenu dans le calculateur</h1>
      <p>il y a XX étapes </p>
        <form className="form">
          <p>Etapes 1: votre situation</p>
          <div className='form-situation'>
            <input 
              type='text'
              className='form-situation-switch'
              onChange= ''
              value="Votre situation:"
              name='revenu-text'
            />
            <Button className='content='Seule' Seule />
            <Button className='content='Couple' Couple />
 

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

