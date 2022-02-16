import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
/** Service */
import { getCharacters } from 'api/marvel';
/** Action types */
import {
	CHARACTER_LIST_REQUEST,
	CHARACTER_LIST_SUCCESS,
	CHARACTER_LIST_FAILURE,
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
