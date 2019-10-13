import React from 'react';
import Summary from './Summary';

const Calculator = () => {
    return (
        <div>
            <Summary currentRound={1} cardsInPlay={12} turnsRemaining={6}/>
            <p>Calcing</p>
        </div>
    );
}

export default Calculator;