export enum ScenarioActionKeys {
    PLAY_STANDARD = "PLAY_STANDARD",
    PLAY_LOSS_CARD = "PLAY_LOSS_CARD",
    SHORT_REST = "SHORT_REST",
    LONG_REST = "LONG_REST",
    ESCAPE_DAMAGE_HAND = "ESCAPE_DAMAGE_HAND",
    ESCAPE_DAMAGE_DISCARD = "ESCAPE_DAMAGE_DISCARD",
    USE_STAMINA_POTION = "USE_STAMINA_POTION",
    REVIVING_ETHER = "REVIVING_ETHER",
    END_TURN = "END_TURN",
    OTHER_ACTION = "OTHER_ACTION"
}

export interface PlayStandardAction {
    type: ScenarioActionKeys.PLAY_STANDARD;
}

export interface PlayLossCardAction {
    type: ScenarioActionKeys.PLAY_LOSS_CARD;
}

export interface ShortRestAction {
    type: ScenarioActionKeys.SHORT_REST;
}

export interface LongRestAction {
    type: ScenarioActionKeys.LONG_REST;
}

export interface EscapeDamageHandAction {
    type: ScenarioActionKeys.ESCAPE_DAMAGE_HAND;
}

export interface EscapeDamageDiscardAction {
    type: ScenarioActionKeys.ESCAPE_DAMAGE_DISCARD;
}

export interface UseStaminaPotionAction {
    type: ScenarioActionKeys.USE_STAMINA_POTION;
}

export interface RevivingEtherAction {
    type: ScenarioActionKeys.REVIVING_ETHER;
}

export interface EndTurnAction {
    type: ScenarioActionKeys.END_TURN;
}

export interface OtherScenarioAction {
    type: ScenarioActionKeys.OTHER_ACTION;
}

export type ScenarioAction =
    | PlayStandardAction
    | PlayLossCardAction
    | ShortRestAction
    | LongRestAction
    | EscapeDamageHandAction
    | EscapeDamageDiscardAction
    | UseStaminaPotionAction
    | RevivingEtherAction
    | EndTurnAction
    | OtherScenarioAction