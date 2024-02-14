import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val)=>{
    dispatch({
        type: 'CHG_CURRENCY',
        payload: val,
    })
  }
    

  return (
    <div className='alert alert-success'>
  Currency {
    <select
      name="Currency"
      id="Currency"
      onChange={event => changeCurrency(event.target.value)}
      style={{
        border: 'none',
        backgroundColor: 'inherit',
        width: '70%',
        height: '100%',
        cursor: 'pointer',
      }}
    >
      <option defaultValue value="£">£ Pound</option>
      <option value="$">$ Dollar</option>
      <option value="€">€ Euro</option>
      <option value="₹">₹ Ruppee</option>
    </select>
  }
</div>
    );
};

export default Currency;
