import {
	CHARACTER_LIST_REQUEST,
	CHARACTER_LIST_SUCCESS,
	CHARACTER_LIST_FAILURE,
	FILTER_CHARACTER_LIST_REQUEST,
	FILTER_CHARACTER_LIST_SUCCESS,
	FILTER_CHARACTER_LIST_FAILURE,
} from '../actionTypes';
import { CharacterActions, CharacterState } from '../types';

const initialState: CharacterState = {
	loading: false,
	error: false,
	characters: [],
};

const charactersReducer = (
	state: CharacterState = initialState,
	action: CharacterActions
): CharacterState => {
	switch (action.type) {
		case CHARACTER_LIST_REQUEST:
			return { loading: true, error: false, characters: [...state.characters] };

		case CHARACTER_LIST_SUCCESS:
			return { loading: false, error: false, characters: action.payload };

		case CHARACTER_LIST_FAILURE:
			return { loading: false, error: true, characters: [] };

		case FILTER_CHARACTER_LIST_REQUEST:
			return { loading: true, error: false, characters: [...state.characters] };

		case FILTER_CHARACTER_LIST_SUCCESS:
			return { loading: false, error: false, characters: action.payload };

		case FILTER_CHARACTER_LIST_FAILURE:
			return { loading: false, error: true, characters: [] };

		default:
			return state;
	}
};

export { charactersReducer };
