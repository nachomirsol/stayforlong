import { CharacterType } from 'types';

export type CharacterState = {
	loading: boolean;
	characters: CharacterType[];
	error: boolean;
};

export type CharacterActions = {
	type: string;
	payload: CharacterType[];
};
