import './NewExpense.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const saveExpenseData = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
        // console.log(expenseData);
    };
    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseData}
                onCancel={stopEditingHandler}
            />}
        </div>
    );
};
export default NewExpense;