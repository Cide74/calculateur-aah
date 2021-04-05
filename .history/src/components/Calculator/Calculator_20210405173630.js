import React from 'react';


import './Calculator.scss';

export default function Calculator() {



const [value, setValue] = useState(false);


  return (
    <div className='calculateur'>
      <h1>Bienvenu dans le calculateur</h1>
        <form>
          <p>votre situation</p>
          <div className='situation'>
            <input 
              type='text'
              className='field-input-revenu-text'
              onChange= ''
              value="Les revenus du foyer : (n-2)"
              name='revenu-text'
            />

      <Switch
        isOn={value}
        handleToggle={() => setValue(!value)}
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

