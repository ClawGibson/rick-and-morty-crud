import {
    ADD_CHARACTER,
    DELETE_CHARACTER,
    EDIT_CHARACTER,
    ADD_CURRENT_CHARACTER,
    FETCH_CHARACTERS,
} from '../Constants';

const initialState = {
    characters: [],
    currentCharacter: {},
};

const rickAndMortyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
            };
        case ADD_CHARACTER:
            const copy = [...state.characters, action.payload];
            return {
                ...state,
                characters: copy,
            };

        case EDIT_CHARACTER:
            return {
                ...state,
                characters: state.characters.map((character) => {
                    if (character.id === action.payload.id) {
                        return { ...action.payload };
                    }
                    return character;
                }),
            };

            break;
        case DELETE_CHARACTER:
            const copy3 = [...state.characters];
            const updatedCharacters = copy3.filter(
                (character) => character.id !== action.payload
            );
            return {
                ...state,
                characters: updatedCharacters,
            };
            break;
        case ADD_CURRENT_CHARACTER:
            return {
                ...state,
                currentCharacter: action.payload,
            };
            break;
        default:
            return state;
    }
};

export default rickAndMortyReducer;
