import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (event.target.value >= totalExpenses) {
            dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
            })
        } else {
            alert("The value cannot exceed 'Spent so far:' "+currency+totalExpenses);
        }
    }
    return (
        <div className='alert alert-secondary'>
            Budget: {currency}{
            <input 
                required='required' 
                type="number" step="10" min="0" max="20000"
                onChange={handleBudgetChange}
                value={parseInt(budget)}>
            </input>
            }
        </div>
    );
};

export default Budget;
