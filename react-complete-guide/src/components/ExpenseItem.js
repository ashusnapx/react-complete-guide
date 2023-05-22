import ExpenseDate from "./ExpenseDate";
import { useState } from 'react';

function ExpenseItem( props ) {

    const [title, setTitle] = useState(props.title);

    // let title = props.title;

    const clickHandler = () => {
        // setTitle(props.title + ' Updated');
    };

    return (

        <div className="flex flex-row items-center justify-center bg-slate-300/70 w-full rounded-full pt-3 pb-3 m-auto">
            <div className="flex-1 ml-5">
                <ExpenseDate date={props.date} />
            </div>
            <div className="flex flex-row items-center justify-between">
                {/* <h2>{props.id}</h2> */}
                <h2 className="mr-10">{title}</h2>
                <div className="bg-purple-500 p-4 rounded-full flex flex-row items-end justify-end mr-2">
                    {props.amount.toLocaleString( 'en-US', { style: 'currency', currency: 'INR' } )}
                </div>
            </div>

            <button className="bg-purple-500 p-3 rounded-full flex flex-row items-end justify-end mr-2" onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem