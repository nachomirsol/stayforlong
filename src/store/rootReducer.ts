import { combineReducers } from 'redux';
import { charactersReducer } from './characters/reducers';

export const rootReducer = combineReducers({
	characters: charactersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
