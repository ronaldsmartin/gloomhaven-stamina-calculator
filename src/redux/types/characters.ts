export enum CharacterId {
    Brute = "Brute",
    Cragheart = "Cragheart",
    Mindthief = "Mindthief",
    Scoundrel = "Scoundrel",
    Spellweaver = "Spellweaver",
    Tinker = "Tinker",
    Sawbones = "Saw"
}

export interface Character {
    id: CharacterId;
    name: string;
    handSize: number;
    hasRevivingEther: boolean;
}

function makeCharacter(
    id: CharacterId, 
    handSize: number, 
    hasRevivingEther: boolean = false
): Character {
    return {
        id: id,
        name: id.toString(),
        handSize: handSize,
        hasRevivingEther: hasRevivingEther,
    }
}

export const ALL_CHARACTERS = [
    makeCharacter(CharacterId.Brute, 10),
    makeCharacter(CharacterId.Cragheart, 11),
    makeCharacter(CharacterId.Mindthief, 10),
    makeCharacter(CharacterId.Scoundrel, 9),
    makeCharacter(CharacterId.Spellweaver, 8, true),
    makeCharacter(CharacterId.Tinker, 12),
    makeCharacter(CharacterId.Sawbones, 10),
]