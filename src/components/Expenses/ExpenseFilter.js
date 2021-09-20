import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {

	const filterYearHandler = (event) => {
		props.onYearSelect(event.target.value);
		// console.log(event.target.value);
		// console.log(props.defaultYear);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={props.defaultYear} onChange={filterYearHandler}>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
