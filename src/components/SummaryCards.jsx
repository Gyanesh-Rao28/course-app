
import React from 'react';

const cards = [
    { title: 'INCOMPLETE', amount: '1'},
    { title: 'IN PROGRESS', amount: '0'},
    { title: 'COMPLETE', amount: '1'}
];

const SummaryCards = () => {
    return (
        <div className="flex justify-around p-4">
            {cards.map((card, index) => (
                <div key={index} className="bg-white p-4 rounded shadow w-1/3 text-center">
                    <h2 className="text-lg font-bold">{card.title}</h2>
                    <p className="text-2xl font-semibold">{card.amount}</p>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;
