import React from 'react';
import { ScenarioAction } from '../redux/types/scenarioActionTypes';
import * as actions from '../redux/actions/calculator';

export interface CalculatorControlsProps {
    onScenarioActionClick: (action: ScenarioAction) => void;
}

const sendOnClickAction = (
    props: CalculatorControlsProps, 
    action: ScenarioAction
) => (event: any) => {
    props.onScenarioActionClick(action);
}

const CalculatorControls = (props: CalculatorControlsProps) => {
    return (
        <div>
            <button onClick={sendOnClickAction(props, actions.playStandardCard())}>
                Play Standard Card
            </button>
            <button onClick={sendOnClickAction(props, actions.playLossCard())}>
                Play Loss Card
            </button>
            <button onClick={sendOnClickAction(props, actions.endTurn())}>
                End Turn
            </button>
        </div>
    )
}

export default CalculatorControls;