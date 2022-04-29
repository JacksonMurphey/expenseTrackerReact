import './ExpenseFilter.css';

const ExpenseFilter = (props) => {


    const yearChangeHandler = (e) => {
        props.onYearSelect(e.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by Year</label>
                {/* Following our Comments from Expenses.js: Here we set value={props.selected}, this allows us to pass state down from Expenses to set a default selected year inside out select input.  */}
                <select value={props.selected} onChange={yearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );

}

export default ExpenseFilter;