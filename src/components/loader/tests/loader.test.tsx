/** Libraries */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/** Components */
import { Loader } from '../';

describe('Loader component', () => {
	it('Should render component with provided props', () => {
		render(<Loader />);

		const loader = screen.getByRole('loader');

		expect(loader).toBeInTheDocument();
	});
});
