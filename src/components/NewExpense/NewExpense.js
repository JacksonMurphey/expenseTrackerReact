import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

    const [isAddExpense, setIsAddExpense] = useState(false);

    const submitExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
            // This is not a perfect way to generate an ID but will work for now. 
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsAddExpense(false);
    }

    const startAddHandler = () => {
        setIsAddExpense(true);
    }

    const stopAddHandler = () => {
        setIsAddExpense(false);
    }

    return (

        <div className="new-expense">
            {!isAddExpense &&
                <button onClick={startAddHandler}>Add New Expense</button>}

            {isAddExpense &&
                <ExpenseForm
                    onSubmitExpenseData={submitExpenseDataHandler}
                    onCancel={stopAddHandler}
                />}
        </div>
    );
}

export default NewExpense;