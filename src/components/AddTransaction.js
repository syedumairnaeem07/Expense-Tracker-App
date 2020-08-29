import React from 'react'

function AddTransaction() {
    return (
        <div className="form-wrapper">
            <form>
                <div className="input-group income">
                    <input type="text" placeholder="Add Income..." autoComplete="off"/>
                    <input type="number" placeholder="Amount" autoComplete="off"/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <form>
                <div className="input-group expense">
                    <input type="text" placeholder="Add Expense..." autoComplete="off"/>
                    <input type="number" placeholder="Amount" autoComplete="off"/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
