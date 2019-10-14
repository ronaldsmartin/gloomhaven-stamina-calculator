import React from 'react';
import { Character, CharacterId } from '../redux/types/characters';

export interface NavigationBarProps {
    currentCharacterId: CharacterId;
    allCharacters: Character[];
    handleChange: (characterId: CharacterId) => void;
}

const NavigationBar = (props: NavigationBarProps) =>
    <nav>
        <label>
            Character class:
        <select
                value={props.currentCharacterId}
                onChange={(event) => props.handleChange(event.target.value as CharacterId)}>
                {
                    props.allCharacters.map(character => {
                        return <option value={character.id}>{character.name}</option>
                    })
                }
            </select>
        </label>
    </nav>

export default NavigationBar;