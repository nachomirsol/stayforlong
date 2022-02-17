/** Assets */
import { SearchIcon } from 'assets/icons/search';
/** Types */
import { SearchTypes } from './types';
/** Styles */
import './styles/search.scss';

export const Search = ({
	query = '',
	type = 'search',
	name = 'search',
	placeholder = 'Name of character',
	onChange,
	onClick,
	onKeyPress,
}: SearchTypes) => {
	return (
		<div className='search' role='search'>
			<input
				aria-label='Search'
				name={name}
				placeholder={placeholder}
				type={type}
				onChange={onChange}
				value={query}
				onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) =>
					onKeyPress(e, query)
				}
			/>
			<button
				className='button'
				onClick={() => onClick(query)}
				role='searchButton'
			>
				<SearchIcon />
			</button>
		</div>
	);
};
