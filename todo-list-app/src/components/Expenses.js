import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';

function Expenses( props ) {
  // State to hold the selected year
  const [ filteredYear, setFilteredYear ] = useState( '2020' );

  // State to hold the filtered expenses based on the selected year
  const [ filteredExpenses, setFilteredExpenses ] = useState( props.items );

  // Event handler for when the year filter changes
  const filterChangeHandler = ( selectedYear ) => {
    // Update the selected year state
    setFilteredYear( selectedYear );
    // Call the function to filter the expenses based on the selected year
    filterExpenses( selectedYear );
  };

  // Function to filter the expenses based on the selected year
  const filterExpenses = ( selectedYear ) => {
    // Filter the expenses array using the selected year
    const filteredExpenses = props.items.filter( ( expense ) => {
      // Convert the expense date to a string and compare with the selected year
      return expense.date.getFullYear().toString() === selectedYear;
    } );
    // Update the filtered expenses state
    setFilteredExpenses( filteredExpenses );
  };

  return (
    <div>
      {/* Render the expenses filter component */}
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />

      {/* Render the expense items */}
      {filteredExpenses.map( ( expense ) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ) )}
    </div>
  );
}

export default Expenses;
