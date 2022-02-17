import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
/** Service */
import { getCharacters, getCharactersByName } from 'api/marvel';
/** Action types */
import {
	CHARACTER_LIST_REQUEST,
	CHARACTER_LIST_SUCCESS,
	CHARACTER_LIST_FAILURE,
	FILTER_CHARACTER_LIST_REQUEST,
	FILTER_CHARACTER_LIST_SUCCESS,
	FILTER_CHARACTER_LIST_FAILURE,
} from '../actionTypes';

import { RootState } from 'store/rootReducer';

export const getCharacterList = (): ThunkAction<
	void,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: CHARACTER_LIST_REQUEST });

			const {
				data: {
					data: { results },
				},
			} = await getCharacters();

			dispatch({
				type: CHARACTER_LIST_SUCCESS,
				payload: results,
			});
		} catch (error) {
			dispatch({
				type: CHARACTER_LIST_FAILURE,
				payload: 'error',
			});
		}
	};
};

export const getCharacter = (
	name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: FILTER_CHARACTER_LIST_REQUEST });

			const {
				data: {
					data: { results },
				},
			} = await getCharactersByName(name);

			dispatch({
				type: FILTER_CHARACTER_LIST_SUCCESS,
				payload: results,
			});
		} catch (error) {
			dispatch({
				type: FILTER_CHARACTER_LIST_FAILURE,
				payload: 'error',
			});
		}
	};
};
