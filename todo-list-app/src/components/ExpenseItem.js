import ExpenseDate from "./ExpenseDate"
import { useState } from 'react'

function ExpenseItem( props ) {
    
    const [ title, setTitle ] = useState( props.title );
    
    const clickHandler = () => {

    };

    return (
        <div className="flex flex-row items-center bg-gray-200/70 rounded-lg shadow p-4 mb-1">
            {/* Display date */}
            <div>
                <ExpenseDate date={props.date} />
            </div>

            {/* Display name of product */}
            <div className="ml-4">
                <h2 className="text-lg font-bold">{props.title}</h2>
            </div>

            <div className="ml-auto">
                {/* Display price of product */}
                <div className="bg-white p-2 rounded">
                    <span className="text-green-600 font-semibold">
                        {props.price !== undefined ? (
                            props.price.toLocaleString( "en-US", {
                                style: "currency",
                                currency: "INR",
                            } )
                        ) : (
                            <span>Price not available</span>
                        )}
                    </span>
                </div>

            </div>
        </div>

    )
}

export default ExpenseItem;
