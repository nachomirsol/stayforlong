/** Libraries */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { Search } from '..';

describe('Search component', () => {
	const props = {
		query: 'query',
		type: 'search',
		name: 'search',
		onChange: jest.fn(),
		onClick: jest.fn(),
		onKeyPress: jest.fn(),
	};

	it('Should render component with provided props', () => {
		render(<Search {...props} />);

		const searchbar = screen.getByRole('search');

		expect(searchbar).toBeInTheDocument();
	});

	it('Should call onChange on type input', () => {
		render(<Search {...props} />);
		const searchbar = screen.getByLabelText('Search');
		const textToType = 'myName';

		user.type(searchbar, textToType);

		expect(props.onChange).toHaveBeenCalled();
		expect(props.onChange).toHaveBeenCalledTimes(textToType.length);
	});

	it('Should call onClick event on click search', () => {
		render(<Search {...props} />);
		const searchButton = screen.getByRole('searchButton');

		user.click(searchButton);

		expect(props.onClick).toHaveBeenCalled();
	});

	it('Should call onClick event on user press enter keyboard', () => {
		render(<Search {...props} />);
		const searchInput = screen.getByLabelText('Search');

		fireEvent.keyPress(searchInput, { key: 'Enter', code: 13, charCode: 13 });

		expect(props.onKeyPress).toHaveBeenCalled();
	});

	it('Should recieve and print the value', () => {
		render(<Search {...props} />);
		const searchbar = screen.getByLabelText('Search');

		expect(searchbar.value).toBe(props.query);
	});
});
