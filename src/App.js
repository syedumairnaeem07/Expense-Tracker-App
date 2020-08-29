import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";

function App() {
	return (
		<div className="container">
			<div className="app-wrapper">
				<Header />
				<Balance />
				<AddTransaction />
				<IncomeList />
				<ExpenseList />
			</div>
      <h1>Developed By Umair</h1>
		</div>
	);
}

export default App;
