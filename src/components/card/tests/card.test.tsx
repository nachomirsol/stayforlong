/** Libraries */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
/** Components */
import { Card } from '..';

describe('Card component', () => {
	let props = {
		name: 'card name',
		description: 'card description',
		thumbnail: { extension: 'jpg', path: 'imgPath' },
		url: { type: 'urlType', url: 'http://url' },
		loading: false,
	};

	it('Should render component with provided props', () => {
		render(<Card {...props} />);

		const card = screen.getByRole('card');

		expect(card).toBeInTheDocument();
	});

	it('Should render card info based on props', () => {
		render(<Card {...props} />);

		const card = screen.getByRole('card');

		expect(card).toHaveTextContent('card name');
		expect(card).toHaveTextContent('card description');
		expect(card).toHaveTextContent('Read more');
	});

	it('Should have src based on props', () => {
		render(<Card {...props} />);

		const card = screen.getByRole('img');

		expect(card).toHaveAttribute(
			'src',
			`${props.thumbnail.path}.${props.thumbnail.extension}`
		);
	});

	it('Should have specific styles when loading is true', () => {
		props.loading = true;

		render(<Card {...props} />);

		const card = screen.getByRole('card');

		expect(card).toHaveStyle(`opacity: 0.3`);
	});

	it('Should have specific styles when loading is true', () => {
		window.open = jest.fn();

		render(<Card {...props} />);

		const cardButton = screen.getByRole('cardButton');
		user.click(cardButton);

		expect(window.open).toHaveBeenCalled();
	});
});
