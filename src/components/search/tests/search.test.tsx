/** Libraries */
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/** Components */
import { Search } from '..';
/** Utils */
import { renderWithRedux } from 'utils/tests';

describe('Search component', () => {
	it('Should render component with provided props', () => {
		renderWithRedux(<Search />);

		const searchbar = screen.getByRole('search');

		expect(searchbar).toBeInTheDocument();
	});
});
