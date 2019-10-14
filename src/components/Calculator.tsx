import React from 'react';
import { ScenarioState } from '../redux/types/scenarioState';
import RoundList from './RoundList';
import Summary from './Summary';

export type CalculatorProps = ScenarioState;

const Calculator = (props: CalculatorProps) => {
    return (
        <div>
            <Summary 
                currentRound={props.currentRound} 
                cardsInPlay={props.currentHandCount} 
                turnsRemaining={props.projectedRounds.length} />
            <RoundList 
                completedRounds={props.completedRounds} 
                projectedRounds={props.projectedRounds} />
        </div>
    );
}

export default Calculator;