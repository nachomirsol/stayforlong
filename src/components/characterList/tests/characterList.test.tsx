/** Libraries */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/** Components */
import { CharacterList } from '../';
/** Mock */
import { characters } from './mockResponse';

describe('CharacterList component', () => {
	let props = {
		loading: false,
		error: false,
		characters,
	};

	it('Should render component with provided props', () => {
		render(<CharacterList {...props} />);

		const characterItem = screen.getByText(/Spider Man description/i);

		expect(characterItem).toBeInTheDocument();
	});

	it('Should find all items of the list', () => {
		render(<CharacterList {...props} />);

		const characterItems = screen.getAllByRole('card');

		expect(characterItems.length).toBe(props.characters.length);
	});

	it('Should render loader element', () => {
		props.loading = true;
		render(<CharacterList {...props} />);

		expect(screen.getByRole('loader')).toBeInTheDocument();
	});

	it('Should render No results content', () => {
		props.characters = [];
		props.loading = false;
		render(<CharacterList {...props} />);

		const noData = screen.getByText(/No results/i);

		expect(noData).toBeInTheDocument();
	});
});
