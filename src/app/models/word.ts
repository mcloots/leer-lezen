export interface Word {
    "id": number;
    "woord": string;
    "moeilijkheidsgraad": number;
    "audio": string;
}

export interface Character {
    "content": string;
    "hidden": boolean;
}