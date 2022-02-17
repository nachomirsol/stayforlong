import { Thumbnail, Url } from 'types';

export type CardTypes = {
	name: string;
	description: string;
	thumbnail: Thumbnail;
	url: Url;
	loading: boolean;
};
