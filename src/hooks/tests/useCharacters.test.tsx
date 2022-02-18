import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useCharacters } from '../useCharacters';

let storeRedux = {
	loading: false,
	error: false,
	characters: [
		{ id: '1', name: 'spiderman' },
		{ id: '2', name: 'iron man' },
		{ id: '3', name: 'abominable' },
	],
};
const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockImplementation(() => storeRedux);
jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch,
	useSelector: () => mockSelector(),
}));

describe('useDashboard hook', () => {
	test('Should get data from redux store', () => {
		const { result } = renderHook(() => useCharacters());

		waitFor(() =>
			expect(result.current.characters.length).toBe(
				storeRedux.characters.length
			)
		);
	});
});
