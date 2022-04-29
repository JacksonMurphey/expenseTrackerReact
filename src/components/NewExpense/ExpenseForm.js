import './ExpenseForm.css';
import { useState } from 'react';


const ExpenseForm = (props) => {

    //Holding and Setting State
    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');
    // This state is handled in our NewExpense.js file now
    // const [showForm, setShowForm] = useState(false);

    // Instead of using multiple states, we could use one, and set it as an object.
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // });

    // Handlers to control 'onChange'
    const titleChangeHandler = (e) => {
        setInputTitle(e.target.value);

        //Here, Since we are relying on the previous state of our object, React could cause you problems if you try and set it how we do below. It should technically work, but since we are relying on our previous state, we should set State by calling our setter, and passing a function. See Below. 
        // setUserInput({
        //     ...userInput,
        //     title: e.target.value,
        // });

        // This way guarantees the state snapshot returned is always the latest state snapshop.
        // setUserInput((prevState) => {
        //     return {...prevState, title: e.target.value};
        // });
    };

    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     amount: e.target.value,
        // });
    };

    const dateChangeHandler = (e) => {
        setInputDate(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     date: e.target.value,
        // });
    };

    // Handler for our form submission
    const submitHandler = (e) => {
        e.preventDefault();

        //Since we are using 3 states, and not the one state Object, we will not create an object.
        const expenseData = {
            title: inputTitle,
            amount: +inputAmount,
            date: new Date(inputDate),
        };
        //Line Below: I am able to pass data up, to the parent (NewExpense.js) by creating a prop inside the <ExpenseForm /> component, that points to a function, and accepts an object parameter. This essentially is creating a listener to our <ExpenseForm /> component much like how below in our jsx, when we create an <input> and add an onChange listener to that. 
        props.onSubmitExpenseData(expenseData);

        setInputTitle('');
        setInputAmount('');
        setInputDate('');

        console.log(expenseData);
    };


    // I built the below code to conditionally show or not show our form based off state. I should have done this portion in NewExpense.js since that is where I render our ExpenseForm component.

    // const formStateHandler = () => {
    //     setShowForm(false);
    // }

    // let formContent = 
    // <form onSubmit={submitHandler}>
    //     <div className='new-expense__controls'>
    //         <div className='new-expense__control'>
    //             <label htmlFor="title">Title</label>
    //             <input type='text' value={inputTitle} onChange={titleChangeHandler} />
    //         </div>
    //         <div className='new-expense__control'>
    //             <label htmlFor="amount">Amount</label>
    //             <input type='number' min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler} />
    //         </div>
    //         <div className='new-expense__control'>
    //             <label htmlFor="date">Date</label>
    //             <input type='date' min='2019-01-01' max='2025-12-31' value={inputDate} onChange={dateChangeHandler} />
    //         </div>
    //     </div>
    //     <div className='new-expense__actions'>
    //         <button type='button' onClick={formStateHandler}>Cancel</button>
    //         <button type='submit'>Add Expense</button>
    //     </div>
    // </form>

    // if (!showForm) {
    //     formContent = <button onClick={() => setShowForm(true)}>Add New Expense</button>;
    // }

    return (
        // <>
        //     {formContent}
        // </>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="title">Title</label>
                    <input type='text' value={inputTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input type='number' min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input type='date' min='2019-01-01' max='2025-12-31' value={inputDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>


    );
}

export default ExpenseForm;