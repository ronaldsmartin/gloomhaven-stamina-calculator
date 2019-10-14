import { playLossCard, playRevivingEther, playStandardCard, shortRest } from "../actions/calculator";
import { ScenarioAction, ScenarioActionKeys } from "../types/scenarioActionTypes";
import { Round, ScenarioState } from "../types/scenarioState";
import { CharacterAction, CharacterActionKeys } from "../types/characterActionTypes";
import { initialCharacterState } from "./character";

const initialCharacter = initialCharacterState.current;

const initialState: ScenarioState = {
    startingHandCount: initialCharacter.handSize,
    hasRevivingEther: initialCharacter.hasRevivingEther,

    currentRound: 1,
    currentHandCount: initialCharacter.handSize,
    currentDiscardCount: 0,
    currentLostCount: 0,

    completedRounds: [],
    projectedRounds: [],
}

export function calculateProjectedRounds(
    startingHandCount: number,
    currentHandCount: number,
    currentDiscardCount: number,
    currentLostCount: number,
    hasRevivingEther: boolean
): Round[] {
    // Base case
    if (currentHandCount < 2) {
        // The player is exhausted this turn.
        return [];
    }

    // The maximum number of cards in play next round if we rest (without Reviving Ether):
    const maxNextRoundCardCount = currentHandCount + currentDiscardCount - 1;

    if (hasRevivingEther && maxNextRoundCardCount < 2) {
        // Spellweaver needs to use Reviving Ether. 
        // The optimal move will burn a Loss card before applying Reviving Ether.
        const thisRound: Round = [
            playLossCard(),
            playRevivingEther(),
        ] 
        return [thisRound].concat(
            calculateProjectedRounds(startingHandCount, startingHandCount - 1, 0, 0, false)
        )
    }

    // Assume a standard move (optimal to avoid Exhaustion).
    let thisRound: Round = [
        playStandardCard(),
        playStandardCard(),
    ];

    if (currentHandCount < 4 && maxNextRoundCardCount >= 2) {
        // The character should rest to avoid exhaustion after this turn.
        thisRound.push(shortRest())

        return [thisRound].concat(
            calculateProjectedRounds(
                startingHandCount, 
                maxNextRoundCardCount, 
                0, 
                currentLostCount + 1, 
                hasRevivingEther
            )
        );
    }

    return [thisRound].concat(
        calculateProjectedRounds(
            startingHandCount,
            currentHandCount - 2,
            currentDiscardCount + 2,
            currentLostCount,
            hasRevivingEther
        )
    );
}

const calculator = (
    state: ScenarioState = initialState, 
    action: ScenarioAction | CharacterAction
): ScenarioState => {
    switch (action.type) {
        case ScenarioActionKeys.PLAY_STANDARD:
            return {
                ...state,
                currentHandCount: state.currentHandCount - 1,
                currentDiscardCount: state.currentDiscardCount + 1,
            }
        case ScenarioActionKeys.PLAY_LOSS_CARD:
            // Fallthrough
        case ScenarioActionKeys.ESCAPE_DAMAGE_HAND:
            return {
                ...state,
                currentHandCount: state.currentHandCount - 1,
                currentLostCount: state.currentLostCount + 1,
            }
        case ScenarioActionKeys.SHORT_REST:
            // Fallthrough
        case ScenarioActionKeys.LONG_REST:
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
                hasRevivingEther: false,
            }
        case ScenarioActionKeys.END_TURN:
            return {
                ...state,
                currentRound: state.currentRound + 1,
            }
        case ScenarioActionKeys.OTHER_ACTION:
            return state;
        case CharacterActionKeys.CHANGE_CHARACTER:
            const newCharacter = action.newCharacter;
            return {
                ...state,
                startingHandCount: newCharacter.handSize,
                hasRevivingEther: newCharacter.hasRevivingEther,
                currentRound: 1,
                currentHandCount: newCharacter.handSize,
                currentDiscardCount: 0,
                currentLostCount: 0,
                completedRounds: [],
            }
        default:
            return state;
    }
}

export default calculator;