import { ScenarioState } from "./types/scenarioState";
import { ScenarioAction, ScenarioActionKeys } from "./types/scenarioActionTypes";

const initialState: ScenarioState = {
    currentRound: 1,
    startingHandCount: 12,
    currentHandCount: 12,
    currentDiscardCount: 0,
    currentLostCount: 0,
}

const calculator = (
    state: ScenarioState = initialState, 
    action: ScenarioAction
): ScenarioState => {
    switch (action.type) {
        case ScenarioActionKeys.PLAY_STANDARD:
            return {
                ...state,
                currentHandCount: state.currentHandCount - 1,
                currentDiscardCount: state.currentDiscardCount + 1,
            }
        case ScenarioActionKeys.PLAY_LOSS_CARD,
             ScenarioActionKeys.ESCAPE_DAMAGE_HAND:
            return {
                ...state,
                currentHandCount: state.currentHandCount - 1,
                currentLostCount: state.currentLostCount + 1,
            }
        case ScenarioActionKeys.SHORT_REST, 
             ScenarioActionKeys.LONG_REST:
            return {
                ...state,
                currentHandCount: state.currentHandCount + Math.max(state.currentDiscardCount - 1, 0),
                currentDiscardCount: 0,
                currentLostCount: Math.min(state.currentLostCount + 1, state.startingHandCount),
            }
        case ScenarioActionKeys.ESCAPE_DAMAGE_DISCARD:
            return {
                ...state,
                currentDiscardCount: state.currentDiscardCount - 2,
                currentLostCount: state.currentLostCount + 2,
            }
        case ScenarioActionKeys.USE_STAMINA_POTION:
            return {
                ...state,
                currentHandCount: state.currentHandCount + Math.min(2, state.currentDiscardCount),
                currentDiscardCount: Math.max(state.currentDiscardCount - 2, 0),
            }
        case ScenarioActionKeys.REVIVING_ETHER:
            return {
                ...state,
                currentHandCount: state.currentHandCount + state.currentLostCount,
                currentLostCount: 0,
            }
        case ScenarioActionKeys.END_TURN:
            return {
                ...state,
                currentRound: state.currentRound + 1,
            }
        case ScenarioActionKeys.OTHER_ACTION:
            return state;
        default:
            return state;
    }
}

export default calculator