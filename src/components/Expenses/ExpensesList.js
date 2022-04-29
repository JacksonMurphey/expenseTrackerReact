import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";


const ExpensesList = (props) => {

    // Storing JSX content as a variable, This allows us to then create an if check below, outside of our return, to perform the logic inside our return. 
    // This logic was originally in our Expenses.js file. We now are creating a component specifically for this content. 
    // let expensesContent = <p style={{ color: 'white', margin: '15px' }}>No Expenses Found</p>;

    // if (props.items.length > 0) {
    //     expensesContent = props.items.map((expense) => (
    //         <ExpenseItem
    //             //Here we could add key={index} if we added index as a second parameter in our map function
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ));
    // }

    //Since we are now making a component specifically to display our list, we can refactor the above code to the below. 
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    //Here we could add key={index} if we added index as a second parameter in our map function
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
            }
        </ul>
    )


}

export default ExpensesList;