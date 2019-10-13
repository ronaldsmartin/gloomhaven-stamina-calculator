import React from 'react';

export interface SummaryProps { 
    currentRound: number;
    cardsInPlay: number;
    turnsRemaining: number;
}

const Summary = (props: SummaryProps) => {
    return (
        <div className="Summary">
            <h2>Summary</h2>
            <dl>
                <dt>Round</dt>
                <dd>{props.currentRound}</dd>

                <dt>Cards Left</dt>
                <dd>{props.cardsInPlay}</dd>

                <dt>Turns Left</dt>
                <dd>{props.turnsRemaining}</dd>
            </dl>
        </div>
    );
};
export default Summary;