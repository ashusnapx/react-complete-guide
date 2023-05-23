import React, { useState } from 'react'

function ExpenseForm( props ) {
    /* initially the title part would be blank */
    const [ enteredTitle, setEnteredTitle ] = useState( '' );

    /* initially the amount part would be blank */
    const [ enteredAmount, setEnteredAmount ] = useState( '' );

    /* initially the date part would be blank */
    const [ enteredDate, setEnteredDate ] = useState( '' );

    /* when add expense button is clicked, i need to update the state by displaying the new expense and resetting the values entered in the form */

    /* storing the value entered under title label */
    const titleChangeHandler = ( event ) => {
        const inputRegex = /^[A-Za-z]+$/; // Regular expression to match only letters

        const inputValue = event.target.value;
        if ( inputValue === '' || inputRegex.test( inputValue ) ) {
            setEnteredTitle( inputValue );
        }
    }

    /* storing the value entered under amount label */
    const amountChangeHandler = ( event ) => {
        const inputRegex = /^\d*\.?\d*$/; // Regular expression to match numeric values with optional decimal points

        const inputValue = event.target.value;
        if ( inputValue === '' || inputRegex.test( inputValue ) ) {
            setEnteredAmount( inputValue );
        }
    }
    /* storing the value entered under date label */
    const dateChangeHandler = ( event ) => {
        setEnteredDate( event.target.value );
    }

    /* storing the whole values entered under above labels */
    const submitHandler = ( event ) => {
        /* preventDefault() is used to prevent the default behaviour of the form that is to reload the page when add expense button is clicked */
        event.preventDefault();

        /* storing the whole values entered under above labels */
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date( enteredDate ),
        };

        /* passing the data to the parent component ie. NewExpense.js */
        props.onSaveExpenseData( expenseData );

        /* resetting the values entered in the form */
        setEnteredTitle( '' );
        setEnteredAmount( '' );
        setEnteredDate( '' );
    }

    return (
        <div className="flex max-w-3xl mx-auto">
            {/* Form section */}
            <div className="w-2/3">
                {/* Expense form */}
                <form onSubmit={submitHandler}>
                    {/* Form fields */}
                    <div className="bg-white rounded-lg p-4 space-y-4">
                        {/* Label and input for Title */}
                        <div className="flex flex-col">
                            <label htmlFor="title" className="font-bold mb-1">
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={enteredTitle}
                                onChange={titleChangeHandler}
                                className="border border-gray-300 px-3 py-2 rounded"
                                required
                            />
                        </div>

                        {/* Label and input for Amount */}
                        <div className="flex flex-col">
                            <label htmlFor="amount" className="font-bold mb-1">
                                Amount
                            </label>
                            <input
                                id="amount"
                                type="number"
                                min="0.01"
                                step="0.01"
                                value={enteredAmount}
                                onChange={amountChangeHandler}
                                className="border border-gray-300 px-3 py-2 rounded"
                                required
                            />
                        </div>

                        {/* Label and input for Date */}
                        <div className="flex flex-col">
                            <label htmlFor="date" className="font-bold mb-1">
                                Date
                            </label>
                            <input
                                id="date"
                                type="date"
                                min="2018-01-01"
                                max="2023-12-31"
                                value={enteredDate}
                                onChange={dateChangeHandler}
                                className="border border-gray-300 px-3 py-2 rounded"
                                required
                            />
                        </div>

                        {/* Submit button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800"
                            >
                                Add Expense
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Illustration section */}
            <div className="w-1/3 flex justify-center">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/001/637/285/original/man-hold-phone-fill-online-form-apply-for-job-free-vector.jpg"
                    alt="Illustration"
                    className="max-h-full filter grayscale"
                />
            </div>
        </div>
    )
}

export default ExpenseForm
