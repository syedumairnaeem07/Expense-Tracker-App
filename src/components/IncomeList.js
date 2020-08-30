import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransactions";

function IncomeList() {
	const { incomeTransactions } = useContext(GlobalContext);
	// console.log(incomeTransactions);
	return (
		<div className="transactions transactions-income">
			<h2>Transaction History</h2>
			<ul className="transaction-list">
				{incomeTransactions.map((incomeTransaction) => (
					<IncomeTransaction
						key={incomeTransaction.id}
						incomeTransaction={incomeTransaction}
					></IncomeTransaction>
				))}
			</ul>
		</div>
	);
}

export default IncomeList;
