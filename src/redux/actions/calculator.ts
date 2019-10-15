import { 
    EndTurnAction,
    EscapeDamageDiscardAction,
    EscapeDamageHandAction,
    LongRestAction,
    PlayLossCardAction,
    PlayStandardAction,
    RevivingEtherAction,
    ScenarioActionKeys,
    ShortRestAction,
    UseStaminaPotionAction,
} from '../types/scenarioActionTypes';

export function playStandardCard(): PlayStandardAction {
    return {
        type: ScenarioActionKeys.PLAY_STANDARD,
    }
}

export function playLossCard(): PlayLossCardAction {
    return {
        type: ScenarioActionKeys.PLAY_LOSS_CARD,
    }
}

export function shortRest(): ShortRestAction {
    return {
        type: ScenarioActionKeys.SHORT_REST,
    }
}

export function longRest(): LongRestAction {
    return {
        type: ScenarioActionKeys.LONG_REST,
    }
}

export function escapeDamageByLossFromHand(): EscapeDamageHandAction {
    return {
        type: ScenarioActionKeys.ESCAPE_DAMAGE_HAND,
    }
}

export function escapeDamageByLossFromDiscard(): EscapeDamageDiscardAction {
    return {
        type: ScenarioActionKeys.ESCAPE_DAMAGE_DISCARD,
    }
}

export function useStaminaPotion(): UseStaminaPotionAction {
    return {
        type: ScenarioActionKeys.USE_STAMINA_POTION,
    }
}

export function playRevivingEther(): RevivingEtherAction {
    return {
        type: ScenarioActionKeys.REVIVING_ETHER,
    }
}

export function endTurn(): EndTurnAction {
    return {
        type: ScenarioActionKeys.END_TURN,
    }
}