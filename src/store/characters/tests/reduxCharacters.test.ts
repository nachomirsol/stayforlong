import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import * as types from '../actionTypes';
import { getCharacterList, getCharacter } from '../actions';
import { charactersReducer } from '../reducers';
/** Constants */
import { MARVEL_API } from 'constants/api';

// Create axios mock
const axiosMock = new MockAdapter(axios);

// Mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL, VERSION, TYPE, API_KEY } = MARVEL_API;

const MOCKED_API_DATA = [
	{ id: 1, name: 'test 1', description: 'description 1' },
	{ id: 2, name: 'test 2', description: 'description 2' },
	{ id: 3, name: 'test 3', description: 'description 3' },
];

const MOCKED_API_DATA_GET_CHARACTER = [
	{ id: 1, name: 'test 1', description: 'description 1' },
];

describe('Character list Redux actions', () => {
	beforeEach(() => {
		axiosMock.reset();
	});

	it('Should fire CHARACTER_LIST_REQUEST and CHARACTER_LIST_SUCCESS in case of success', async () => {
		axiosMock
			.onGet(
				`${BASE_URL}/${VERSION}/${TYPE}/characters?apikey=${API_KEY}&limit=18`
			)
			.reply(200, { data: { results: MOCKED_API_DATA } });

		const expectedActions = [
			{ type: types.CHARACTER_LIST_REQUEST },
			{
				type: types.CHARACTER_LIST_SUCCESS,
				payload: MOCKED_API_DATA,
			},
		];
		const store = mockStore();

		await store.dispatch(getCharacterList());

		expect(store.getActions()).toEqual(expectedActions);
	});

	it('Should fire CHARACTER_LIST_REQUEST and CHARACTER_LIST_FAILURE in case of failure', async () => {
		axiosMock
			.onGet(
				`${BASE_URL}/${VERSION}/${TYPE}/characters?apikey=${API_KEY}&limit=18`
			)
			.networkError();

		const expectedActions = [
			{ type: types.CHARACTER_LIST_REQUEST },
			{ type: types.CHARACTER_LIST_FAILURE, payload: 'error' },
		];
		const store = mockStore();

		await store.dispatch(getCharacterList());

		expect(store.getActions()).toEqual(expectedActions);
	});
});

describe('Characters reducer', () => {
	const initialState = { loading: false, error: false, characters: [] };

	it('should return empty array as initial state', () => {
		expect(charactersReducer(initialState, {})).toEqual(initialState);
	});

	it('Should return the array with the todo 3 removed', () => {
		const initialState = {
			characters: [],
			loading: false,
			error: false,
		};

		expect(initialState.characters).toHaveLength(0);

		const state = charactersReducer(initialState, {
			type: types.CHARACTER_LIST_SUCCESS,
			payload: MOCKED_API_DATA,
		});

		expect(state.characters).toHaveLength(3);
	});
});
