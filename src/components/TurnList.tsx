import React from 'react';
import { Turn, TurnTiming } from './Calculator';
import ShortRestRow from './ShortRestRow';
import TurnRecordRow from './TurnRecordRow';

export function classNameFor(timing: TurnTiming): string {
    switch (timing) {
        case TurnTiming.Previous:   return 'PreviousTurn';
        case TurnTiming.Future:     return 'FutureTurn';
    }
}

export interface TurnListProps {
    previousTurns: Turn[];
    projectedTurns: Turn[];
}

function rowsFromTurn(turn: Turn, timing: TurnTiming) {
    let turnRow = [
        <TurnRecordRow
                    key={`turn-${turn.roundNumber}`}
                    roundNumber={turn.roundNumber}
                    description={turn.description}
                    turnTiming={timing} />
    ];
    if (turn.shortRestFollows) {
        turnRow.push(
            <ShortRestRow 
                    key={`rest-${turn.roundNumber}`}
                    turnTiming={timing}/>
        )
    }
    return turnRow
}

const TurnList = (props: TurnListProps) => <table className="TurnList">
    <caption>Turns</caption>
    <tbody>
        { props.previousTurns.flatMap(turn => rowsFromTurn(turn, TurnTiming.Previous)) }
    </tbody>
    <tbody>
        { props.projectedTurns.map(turn => rowsFromTurn(turn, TurnTiming.Future)) }
    </tbody>
</table>;
export default TurnList;