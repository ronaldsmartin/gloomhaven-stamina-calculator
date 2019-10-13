import React from 'react';
import Summary from './Summary';
import TurnList from './TurnList';

export interface Turn {
    roundNumber: number;
    description: string;
    shortRestFollows: boolean;
}

export class StandardTurn implements Turn {
    readonly description: string = "Standard turn";
    constructor(readonly roundNumber: number, readonly shortRestFollows: boolean) {}
}
export enum TurnTiming { Previous, Future }

const mockPreviousTurns: Turn[] = [
    new StandardTurn(1, false),
    new StandardTurn(2, false),
    new StandardTurn(3, false),
    new StandardTurn(4, true),
];
const mockProjectedTurns: Turn[] = [
    new StandardTurn(5, false),
    new StandardTurn(6, false),
    new StandardTurn(7, true),
    new StandardTurn(8, false),
];

const Calculator = () => {
    return (
        <div>
            <Summary currentRound={1} cardsInPlay={12} turnsRemaining={6} />
            <TurnList previousTurns={mockPreviousTurns} projectedTurns={mockProjectedTurns} />
        </div>
    );
}

export default Calculator;