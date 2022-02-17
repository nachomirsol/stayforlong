/** Libraries */
import axios from 'axios';
/** Constants */
import { MARVEL_API } from 'constants/api';

const { BASE_URL, VERSION, TYPE, API_KEY } = MARVEL_API;

export const getCharacters = () => {
	return axios.get(
		`${BASE_URL}/${VERSION}/${TYPE}/characters?apikey=${API_KEY}&limit=18`
	);
};

export const getCharactersByName = (name: string = '') => {
	return axios.get(
		`${BASE_URL}/${VERSION}/${TYPE}/characters?apikey=${API_KEY}&name=${name}`
	);
};
