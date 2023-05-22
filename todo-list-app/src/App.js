import ExpenseItem from "./components/ExpenseItem";
import {useState} from 'react';

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
    date: new Date( 2023, 5, 22 ),
  },

  {
    id: 'a3',
    title: 'Black Book - Organic Chemistry',
    price: 800,
    date: new Date( 2023, 5, 21 ),
  },

  {
    id: 'a4',
    title: 'Physics Cengage P-1',
    price: 900,
    date: new Date( 2023, 5, 20 ),
  },

  {
    id: 'a1',
    title: 'HC Verma Book',
    price: 500,
    date: new Date( 2023, 5, 23 ),
  },

]

function App() {

  /* state to update expenses when user adds to todo list */
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  return (
    <div className="App">
      <div>
        {/* App name */}
        <h1>Todo List App</h1>
      </div>
      
      <div>
        {/* Display list of expenses */}
        <ExpenseItem items={expenses} />
      </div>
      
    </div>
  );
}

export default App;
