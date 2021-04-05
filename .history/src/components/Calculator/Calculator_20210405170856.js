import React from 'react';


import './Calculator.scss';

export default function Calculator() {


 const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };



  return (
    <div ClassName='calculateur'>
      <h1>je suis le calculateur</h1>
      <form className='form'>
        <input 
          type="text"
          ClassName='field-input'
          onChange= ''
          value=""
          // onChange='{handleChange}'
          placeholder='Revenu 1'
          name='{name}'
        />
      </form>
    </div>
  );
}

