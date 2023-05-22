import { Card, Title, Button, DateRangePicker } from "@tremor/react";
import { useState } from "react";
const ExpenseForm = (props) => {

    const [ enteredTitle, setEnteredTitle ] = useState( '' );
    const [ enteredAmount, setEnteredAmount ] = useState( '' );
    const [ enteredDate, setEnteredDate ] = useState( '' );

    // const [ userInput, setUserInput ] = useState( {
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })


    const titleChangeHandler = ( event ) => {
        setEnteredTitle( event.target.value );
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredTitle: event.target.value,
        //     }
        // )

        // setUserInput( ( prevState ) => {
        //     return { ...prevState, enteredTitle: event.target.value, }
        // } );
    };
    const amountChangeHandler = ( event ) => {
        setEnteredAmount( event.target.value );

        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredAmount: event.target.value,
        //     }
        // )
    };
    const dateChangeHandler = ( event ) => {
        setEnteredDate( event.target.value );

        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredDate: event.target.value,
        //     }
        // )
    };

    const submitHandler = ( event ) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date( enteredDate ),
        }

        props.onSaveExpenseData( expenseData );
        setEnteredTitle( '' );
        setEnteredAmount( '' );
        setEnteredDate( '' );
    }

    const handleClear = ( event ) => {
        // event.preventDefault();
        setEnteredTitle( '' );
        setEnteredAmount( '' );
        setEnteredDate( '' );
    }



    return (
        <form onSubmit={submitHandler}>
            <Card className=" flex rounded-lg space-x-3 p-auto" >
                <Card decoration="top" decorationColor="indigo" className="bg-green-300">
                    <Title>Title</Title>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </Card >
                <Card decoration="top" decorationColor="indigo" className="bg-green-300">
                    <Title>Amount</Title>
                    <input type="text" onChange={amountChangeHandler} value={ enteredAmount} />
                </Card>
                <Card decoration="top" decorationColor="indigo" className="bg-green-300">
                    <Title>Date</Title>
                    <DateRangePicker className="max-w-sm mx-auto" enableDropdown={false} onChange={dateChangeHandler}/>
                </Card>
                <Button size="xl" type="submit" className="hover:bg-black">
                    Add Expense
                </Button>
                <Button size="xl" type="submit" className="bg-red-600 hover:bg-black" onClick={handleClear}>
                    Reset Data
                </Button>
            </Card>
        </form>
    )
}

export default ExpenseForm