import ExpenseDate from "./ExpenseDate"

function ExpenseItem(props) {
    return (
        <div>
            {/* Display date */}
            <div>
                <ExpenseDate date={props.date} />
            </div>

            {/* Display name of product */}
            <div>
                <h2>{props.title}</h2>
            </div>

            {/* Display price of product */}
            <h2>{props.price.toLocaleString( 'en-US', { style: 'currency', currency: 'INR' } )}</h2>
        </div>
    )
}

export default ExpenseItem
