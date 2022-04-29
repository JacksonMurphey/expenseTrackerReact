import { useState } from "react";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import './Expenses.css';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState("2020"); //Setting default state to 2020.


    const addFilterHandler = (year) => {
        setFilterYear(year);

        // console.log(year);
    }


    // We must create a new array that is filtered in order to map thru the filtered Array. 
    const filteredExpenses = props.items.filter((expense) => {
        //above we have our filterYear set to a default STRING = '2020'. 
        //Our date is save as an object 'date: new Date(2020,7,14)' 
        // so we must pull the year out of the object, and set it to a string
        // so that we can check it against our 'filterYear' state.
        return expense.date.getFullYear().toString() === filterYear;

        //Now below in our JSX return, instead of mapping props.items.map(), we will instead map through filteredExpenses.map()
    });

    // Storing JSX content as a variable, This allows us to then create an if check below, outside of our return, to perform the logic inside our return. 
    // This logic was originally in our Expenses.js file. We now are creating a component specifically for this content. 
    // let expensesContent = <p style={{ color: 'white', margin: '15px' }}>No Expenses Found</p>;

    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             //Here we could add key={index} if we added index as a second parameter in our map function
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ));
    // }

    return (
        <div>
            <Card className="expenses">

                {/* Then we created another prop called 'selected' and pass state down to ExpenseFilter.js */}
                <ExpenseFilter selected={filterYear}
                    onYearSelect={addFilterHandler} />

                {/* Here we are calling our expensesContent variable we created above, to do the same as the short circut below that is commented out. This allows for a leaner return */}
                {/* {expensesContent} */}

                {/* Below we are using a short circut to dynamically display our data. */}
                {/* {filteredExpenses.length === 0 && <p style={{ color: 'white', margin: '15px' }}>No Expenses Found</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            //Here we could add key={index} if we added index as a second parameter in our map function
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                } */}
                {/* For the list of out expenses, we decided to create an component to do this. Thus I have commented out all the above content so we can do the below */}
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />

            </Card>
        </div>
    );
}

export default Expenses;