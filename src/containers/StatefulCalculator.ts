import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Calculator from '../components/Calculator';
import { AppState } from '../redux/reducers/app';
import { calculateProjectedRounds } from '../redux/reducers/calculator';
import { ScenarioAction } from '../redux/types/scenarioActionTypes';

const mapStateToProps = (state: AppState) => {
    const scenarioState = state.calculator;
    return {
        ...scenarioState,
        projectedRounds: calculateProjectedRounds(
            scenarioState.startingHandCount,
            scenarioState.currentHandCount,
            scenarioState.currentDiscardCount,
            scenarioState.currentLostCount,
            scenarioState.hasRevivingEther
        ) || [],
    }
};
const matchDispatchToProps = (dispatch: Dispatch) => ({
    onScenarioActionClick: (action: ScenarioAction) => dispatch(action)
});

const StatefulCalculator = connect(
    mapStateToProps,
    matchDispatchToProps,
)(Calculator)

export default StatefulCalculator;