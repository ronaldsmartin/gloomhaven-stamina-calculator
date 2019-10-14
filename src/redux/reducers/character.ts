import { CharacterState } from "../types/characterState";
import { CharacterAction, CharacterActionKeys } from "../types/characterActionTypes";
import { ALL_CHARACTERS, CharacterId } from "../types/characters";

export const initialCharacterState = {
    current: ALL_CHARACTERS.find(c => 
        c.id === CharacterId.Brute
    ) || fail("Missing Brute character definition"),
}

const character = (
    state: CharacterState = initialCharacterState, 
    action: CharacterAction
): CharacterState => {
    switch (action.type) {
        case CharacterActionKeys.CHANGE_CHARACTER:
            return {
                ...state,
                current: action.newCharacter,
            }
        default:
            return state;
    }
    
}

export default character;