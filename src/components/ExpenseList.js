import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransactions";

function ExpenseList() {
	const { expenseTransactions } = useContext(GlobalContext);
	// console.log(expenseTransactions);
	return (
		<div className="transactions transactions-expense">
			<h2>Transaction History</h2>
			<ul className="transaction-list">
				{expenseTransactions.map((expenseTransaction) => (
					<ExpenseTransaction
						key={expenseTransaction.id}
						expenseTransaction={expenseTransaction}
					></ExpenseTransaction>
				))}
			</ul>
		</div>
	);
}

export default ExpenseList;
