import { Character } from "./characters";

export enum CharacterActionKeys {
    CHANGE_CHARACTER = "CHANGE_CHARACTER",
}

export interface ChangeCharacterAction {
    type: CharacterActionKeys.CHANGE_CHARACTER;
    newCharacter: Character;
}

export type CharacterAction =
    | ChangeCharacterAction