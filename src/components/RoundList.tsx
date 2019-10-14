import React from 'react';
import { ScenarioAction, ScenarioActionKeys } from '../redux/types/scenarioActionTypes';
import { Round } from '../redux/types/scenarioState';
import ShortRestRow from './ShortRestRow';
import TurnRecordRow from './TurnRecordRow';

// - TurnTiming type

export enum TurnTiming { Previous, Future }

export function classNameFor(timing: TurnTiming): string {
    switch (timing) {
        case TurnTiming.Previous:   return 'PreviousTurn';
        case TurnTiming.Future:     return 'FutureTurn';
    }
}

// - Props

export interface RoundListProps {
    completedRounds: Round[];
    projectedRounds: Round[];
}

function rowsForRound(round: Round, roundNumber: number, timing: TurnTiming) {
    return round.map((action, index) => rowForAction(action, index, roundNumber, timing, index === 0));
}

function rowForAction(
    action: ScenarioAction,
    actionNumber: number,
    roundNumber: number, 
    timing: TurnTiming,
    isFirstActionInRound: boolean,
) {
    if (action.type === ScenarioActionKeys.SHORT_REST) {
        return <ShortRestRow
                    key={`short-rest-${roundNumber}`}
                    turnTiming={timing} />
    }
    return <TurnRecordRow
                key={`round-${roundNumber}-action-${actionNumber}-${action.type}`}
                roundNumber={isFirstActionInRound ? roundNumber : undefined}
                description={description(action)}
                turnTiming={timing} />
}

function description(action: ScenarioAction) {
    switch (action.type) {
        case ScenarioActionKeys.PLAY_STANDARD:
            return "Play a standard action card";
        case ScenarioActionKeys.PLAY_LOSS_CARD:
            return "Play a loss card";
        case ScenarioActionKeys.SHORT_REST:
            return "Short rest";
        case ScenarioActionKeys.LONG_REST:
            return "Long rest";
        case ScenarioActionKeys.ESCAPE_DAMAGE_HAND:
            return "Lose one hand card to escape damage";
        case ScenarioActionKeys.ESCAPE_DAMAGE_DISCARD:
            return "Lose two discard cards to escape damage";
        case ScenarioActionKeys.USE_STAMINA_POTION:
            return "Use stamina potion";
        case ScenarioActionKeys.REVIVING_ETHER:
            return "Activate Reviving Ether";
        case ScenarioActionKeys.END_TURN:
            return "End the turn.";
        case ScenarioActionKeys.OTHER_ACTION:
            return "";
    }
}

// - RoundList

const RoundList = (props: RoundListProps) => <table className="TurnList">
    <caption>Turns</caption>
    <thead>
        <tr>
            <th scope="col">Round Number</th>
            <th scope="col"></th>
            <th scope="col">Actions taken</th>
        </tr>
    </thead>
    <tbody>
        {
            props.completedRounds.flatMap((round, roundNumber) => 
                rowsForRound(round, roundNumber + 1, TurnTiming.Previous)
            )
        }
    </tbody>
    <tbody>
        {
            props.projectedRounds.flatMap((round, roundNumber) =>
                rowsForRound(round, roundNumber + props.completedRounds.length + 1, TurnTiming.Previous)
            )
        }
    </tbody>
</table>;
export default RoundList;