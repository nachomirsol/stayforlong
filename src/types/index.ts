export type CharacterType = {
	id: number;
	name: string;
	description: string;
	modified: string;
	resourceURI: string;
	comics: InfoType;
	events: InfoType;
	series: InfoType;
	stories: InfoType;
	thumbnail: Thumbnail;
	urls: Url[];
};

type InfoType = {
	available: number;
	collectionURI: string;
	items: InfoItem[];
	returned: number;
};

type InfoItem = {
	name: string;
	resourceUri: string;
};

export type Thumbnail = {
	extension: string;
	path: string;
};

type Url = {
	type: string;
	url: string;
};
