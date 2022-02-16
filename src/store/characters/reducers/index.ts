import {
	CHARACTER_LIST_REQUEST,
	CHARACTER_LIST_SUCCESS,
	CHARACTER_LIST_FAILURE,
	FILTER_CHARACTER_LIST_REQUEST,
	FILTER_CHARACTER_LIST_SUCCESS,
	FILTER_CHARACTER_LIST_FAILURE,
} from '../actionTypes';

const initialState = { loading: false, error: false, characters: [] };

const charactersReducer = (state = initialState, action: any): any => {
	switch (action.type) {
		case CHARACTER_LIST_REQUEST:
			return { loading: true, error: false, characters: [] };

		case CHARACTER_LIST_SUCCESS:
			return { loading: false, error: false, characters: action.payload };

		case CHARACTER_LIST_FAILURE:
			return { loading: false, error: true, characters: [] };

		case FILTER_CHARACTER_LIST_REQUEST:
			return { loading: true, error: false, characters: [] };

		case FILTER_CHARACTER_LIST_SUCCESS:
			return { loading: false, error: false, characters: action.payload };

		case FILTER_CHARACTER_LIST_FAILURE:
			return { loading: false, error: true, characters: [] };

		default:
			return state;
	}
};

export { charactersReducer };
