/** Assets */
import { SearchIcon } from 'assets/icons/search';
/** Types */
import { SearchTypes } from './types';
/** Styles */
import './styles/search.scss';

export const Search = ({
	width = '100%',
	query = '',
	onChange,
	onClick,
}: SearchTypes) => {
	return (
		<div className='search' style={{ width }}>
			<input
				aria-label='Search'
				name='query'
				placeholder='Search'
				type='search'
				onChange={onChange}
				value={query}
			/>
			<button onClick={() => onClick(query)}>
				<SearchIcon />
			</button>
		</div>
	);
};
