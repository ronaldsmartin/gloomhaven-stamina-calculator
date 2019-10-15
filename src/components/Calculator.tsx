import React from 'react';
import { ScenarioState } from '../redux/types/scenarioState';
import RoundList from './RoundList';
import Summary from './Summary';
import CalculatorControls from './CalculatorControls';
import { ScenarioAction } from '../redux/types/scenarioActionTypes';

export interface CalculatorProps extends ScenarioState {
    onScenarioActionClick: (action: ScenarioAction) => void;
}

const Calculator = (props: CalculatorProps) => {
    return (
        <div>
            <Summary 
                currentRound={props.currentRound} 
                cardsInPlay={props.currentHandCount + props.currentDiscardCount - 1} 
                turnsRemaining={props.projectedRounds.length} />
            <RoundList 
                completedRounds={props.completedRounds} 
                projectedRounds={props.projectedRounds} />
            <CalculatorControls 
                onScenarioActionClick={props.onScenarioActionClick} />
        </div>
    );
}

export default Calculator;