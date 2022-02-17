import { CharacterType, Thumbnail, Url } from 'types';

export type CharacterListTypes = {
	loading: boolean;
	error: boolean;
	characters: CharacterType[];
};

export type Character = {
	id: number;
	name: string;
	description: string;
	thumbnail: Thumbnail;
	urls: Url[];
};
