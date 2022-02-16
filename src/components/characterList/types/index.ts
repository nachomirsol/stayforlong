import { CharacterType, Thumbnail } from 'types';

export type CharacterListTypes = {
	loading: boolean;
	error: boolean;
	characters: CharacterType[];
};

export type Character = {
	id: number;
	name: string;
	description: string;
	thumnail: Thumbnail;
};
