import React from 'react';


import './Calculator.scss';

export default function Calculator() {






  return (
    <div className='calculateur'>





<div class="can-toggle">
  <input id="a" type="checkbox">
  <label for="a">
    <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
    <div class="can-toggle__label-text">.can-toggle</div>
  </label>
</div>
<br>
<div class="can-toggle can-toggle--size-small">
  <input id="b" type="checkbox">
  <label for="b">
    <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
    <div class="can-toggle__label-text">.can-toggle.can-toggle--size-small</div>
  </label>
</div>
<br>
<div class="can-toggle can-toggle--size-large">
  <input id="c" type="checkbox">
  <label for="c">
    <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
    <div class="can-toggle__label-text">.can-toggle.can-toggle--size-large</div>
  </label>
</div>
<br>
<div class="can-toggle demo-rebrand-1">
  <input id="d" type="checkbox">
  <label for="d">
    <div class="can-toggle__switch" data-checked="Good" data-unchecked="Bad"></div>
    <div class="can-toggle__label-text">.can-toggle.demo-rebrand-1</div>
  </label>
</div>
<br>
<div class="can-toggle demo-rebrand-2">
  <input id="e" type="checkbox">
  <label for="e">
    <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
    <div class="can-toggle__label-text">.can-toggle.demo-rebrand-2</div>
  </label>
</div>








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

