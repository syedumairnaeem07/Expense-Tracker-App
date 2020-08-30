import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
	const { incomeTransactions, expenseTransactions } = useContext(
		GlobalContext
	);

	const incomeAmount = incomeTransactions.map(
		(incomeTransaction) => incomeTransaction.incomeAmount
	);

	const expenseAmount = expenseTransactions.map(
		(expenseTransaction) => expenseTransaction.expenseAmount
	);

	const totalIncome = incomeAmount
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	const totalExpense = expenseAmount
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	return (
		<div className="balance">
			<h2>Current Balance</h2>
			<h3>${(totalIncome - totalExpense).toFixed(2)}</h3>
			<div className="income-expense">
				<div className="plus">
					<h3>Income</h3>
					<p>+${totalIncome}</p>
				</div>
				<div className="minus">
					<h3>Expenses</h3>
					<p>-${totalExpense}</p>
				</div>
			</div>
		</div>
	);
}

export default Balance;
