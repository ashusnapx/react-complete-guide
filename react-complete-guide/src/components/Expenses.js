import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from 'react';

function Expenses( props ) {

  const [filteredYear,setFilteredYear] = useState('2020');
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear( ( prevYear ) => {
      return selectedYear;
    });
  };
  
  return (
    <div>
    <div className="flex flex-col justify-center gap-2">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}
        />
        {props.items.map( ( expense ) => <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        /> )}
      </div>
    </div>
      
  )
}

export default Expenses