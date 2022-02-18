/** Libraries */
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/** Components */
import { CharacterList } from '../';
/** Utils */
import { renderWithRedux } from 'utils/tests';

describe('CharacterList component', () => {
	it('Should render component with provided props', () => {
		renderWithRedux(<CharacterList />);

		const characterList = screen.getByRole('characterList');

		expect(characterList).toBeInTheDocument();
	});

});
