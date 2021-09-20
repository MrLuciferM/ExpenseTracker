import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filterYear, setfilterYear] = useState("2021");
	const yearSelectHandler = (chosenYear) => {
		setfilterYear(chosenYear);
		console.log(chosenYear);
		// console.log("state", filterYear);
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filterYear;
	});
	console.log(filteredExpenses);

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					defaultYear={filterYear}
					onYearSelect={yearSelectHandler}
				/>
				<ExpensesChart expenses={ filteredExpenses }/>
				<ExpensesList filteredExpenses={filteredExpenses}/>
			</Card>
		</div>
	);
};

export default Expenses;
