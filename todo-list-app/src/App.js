import ExpenseItem from "./components/ExpenseItem";
import { useState } from 'react';
import NewExpense from "./components/NewExpense";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";

/* we need to create a fake dataset for testing while development */
const DUMMY_EXPENSES = [
  {
    id: 'a1',
    title: 'HC Verma Book',
    price: 500,
    date: new Date( 2023, 5, 23 ),
  },

  {
    id: 'a2',
    title: 'RD Sharma Book',
    price: 700,
    date: new Date( 2022, 5, 22 ),
  },

  {
    id: 'a3',
    title: 'Black Book - Organic Chemistry',
    price: 800,
    date: new Date( 2021, 5, 21 ),
  },

  {
    id: 'a4',
    title: 'Physics Cengage P-1',
    price: 900,
    date: new Date( 2020, 5, 20 ),
  },

  {
    id: 'a5',
    title: 'RS Aggrawal Book',
    price: 1000,
    date: new Date( 2019, 5, 19 ),
  },

  {
    id: 'a6',
    title: 'Pradeep Organic Chemistry Book',
    price: 1100,
    date: new Date( 2018, 5, 18 ),
  },

  {
    id: 'a7',
    title: 'Pradeep Organic Chemistry Book',
    price: 1100,
    date: new Date( 2021, 5, 18 ),
  },

]

function App() {

  /* state to update expenses when user adds to todo list */
  const [ expenses, setExpenses ] = useState( DUMMY_EXPENSES );
  
  /* function that triggers on while adding expense and manages states */
  const addExpenseHandler = expense => {
    setExpenses( ( prevExpense ) => {
      return [ expense, ...prevExpense ];
      /* This syntax above means when the user fills the form to add their expenses, then capture it in expense array and then append it in prevExpense array that is snapshot of states that is latest. */
    })
  }

  return (
    <div className="App">
      <div className="text-2xl flex flex-row justify-center bg-gray-200/70 rounded-lg font-bold p-3">
        {/* App name */}
        <h1>Expense List App </h1>
        <span className="ml-1"></span>
        <h1 className="font-thin"> - Made with ❤️ by Ashutosh Kumar</h1>
      </div>

      <div>
        {/* Add new expense */}
        <NewExpense onAddExpense={ addExpenseHandler } />
      </div>
      
      <div>
        {/* Display list of expenses */}
        <Expenses items={expenses} /> 
        {/* The expenses which i'm passing is from useState's initial dummy expense list */}
      </div>
      
    </div>
  );
}

export default App;
