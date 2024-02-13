import React, { useContext } from 'react';
import { Transaction } from './Transaction'; // Corrected import path
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    // Check if transactions is null or undefined before mapping
    if (!transactions) {
        return null; // Or any other suitable behavior for your application
    }

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
};
