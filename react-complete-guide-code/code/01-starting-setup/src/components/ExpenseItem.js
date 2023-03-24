import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date(2021, 2, 28);

  return (
    <div className="expense-item">
      <div>
        {props.date.toISOString()}
        <div>{props.date.toLocaleString("en-Us")}</div>
        <div>Year</div>
        <div>Day</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Kshs. {props.amount}</div>
      </div>
    </div>
  );
}

export de