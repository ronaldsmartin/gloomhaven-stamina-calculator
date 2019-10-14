import { ScenarioAction } from "./scenarioActionTypes";

export interface ScenarioState {
    startingHandCount: number;
    hasRevivingEther: boolean;

    currentRound: number;
    currentHandCount: number;
    currentDiscardCount: number;
    currentLostCount: number;

    completedRounds: Round[];
    projectedRounds: Round[];
}

export type Round = ScenarioAction[];