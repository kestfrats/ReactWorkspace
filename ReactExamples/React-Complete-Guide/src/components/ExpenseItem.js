import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  /* Dummy Data */
  /*
	const expenseDate = new Date(2021, 2, 28);
	const expenseTitle = "Car Insurance";
	const expenseAmount = 294.67;
	*/

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{/*Convert to basic javascript, run anything*/ props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
