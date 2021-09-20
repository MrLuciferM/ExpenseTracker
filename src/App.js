import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Car Insurance",
		amount: 200.59,
		date: new Date(2021, 4, 7),
	},
	{
		id: "e2",
		title: "Laptop",
		amount: 600,
		date: new Date(2018, 9, 17),
	},
	{
		id: "e3",
		title: "Headphones",
		amount: 10,
		date: new Date(2020, 10, 10),
	},
	{
		id: "e4",
		title: "Internet",
		amount: 90,
		date: new Date(2020, 7, 15),
	},
];

function App() {
	
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((previousExpenses) => {
			return [expense, ...previousExpenses];
		});
	};
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
