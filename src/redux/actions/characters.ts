import { CharacterId, ALL_CHARACTERS } from "../types/characters";
import { ChangeCharacterAction, CharacterActionKeys } from "../types/characterActionTypes";
import { fail } from "assert";

export function changeCharacter(newCharacterId: CharacterId): ChangeCharacterAction {
    return {
        type: CharacterActionKeys.CHANGE_CHARACTER,
        newCharacter: ALL_CHARACTERS.find(
            character => character.id === newCharacterId
        ) || fail(`Unknown character picked: ${newCharacterId}`)
    }
}