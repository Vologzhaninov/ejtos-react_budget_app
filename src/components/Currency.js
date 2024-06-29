import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const currencies = { '$': "$ Dollar", '£': "£ Pound", '€': "€ Euro", '₹': "₹ Ruppee" };

  const changeCurrency = (new_currency) => {
     dispatch({
      type: 'CHG_CURRENCY',
      payload: new_currency
    })
    };

  return (
    <div class="dropdown">
  <button class="btn btn-lg text-white fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: 'rgb(130,225,135)'}}>
    Currency ({currencies[currency]})
  </button>
  <ul class="dropdown-menu text-white" style={{backgroundColor: 'rgb(130,225,135)'}}>
    <li><button class="dropdown-item" type="button" onClick={() => changeCurrency('$')}>{currencies['$']}</button></li>
    <li><button class="dropdown-item" type="button" onClick={() => changeCurrency('£')}>{currencies['£']}</button></li>
    <li><button class="dropdown-item" type="button" onClick={() => changeCurrency('€')}>{currencies['€']}</button></li>
    <li><button class="dropdown-item" type="button" onClick={() => changeCurrency('₹')}>{currencies['₹']}</button></li>
  </ul>
</div>
  );
};

export default Currency;