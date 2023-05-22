function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  const year = props.date.getFullYear();
  return (
    <div className="bg-gray-900/60 rounded-full p-1 m-2 max-w-xs">
      <div className="flex flex-col items-center justify-start">
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
