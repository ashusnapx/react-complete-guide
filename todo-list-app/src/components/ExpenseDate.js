/* Purpose of this component : To read user input ie. date and extract it to use it in the form of date, month and year  */

function ExpenseDate( props ) {

    /* Extract Day */
    // const day = props.date.toLocaleString( 'en_US', {
    //     weekday: "long"
    // } );

    /* Extract Date */
    const date = props.date.toLocaleString( 'en-US', {
        day: "2-digit"
    } );

    /* Extract Month */
    const month = props.date.toLocaleString( 'en-US', {
        month: "long"
    } );

    /* Extract Year */
    const year = props.date.getFullYear();
  return (
    <div>
      <div>{date} {month} {year}</div>
    </div>
  )
}

export default ExpenseDate
