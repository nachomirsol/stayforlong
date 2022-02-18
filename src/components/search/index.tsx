/** Assets */
import { SearchIcon } from 'assets/icons/search';
/** Hooks */
import { useSearch } from 'hooks/useSearch';
/** Types */
import { SearchTypes } from './types';
/** Styles */
import './styles/search.scss';

export const Search = ({
	type = 'search',
	name = 'search',
	placeholder = 'Name of character',
}: SearchTypes) => {
	const { query, handleChange, handleSearchClick, handleKeyPress } =
		useSearch();

	return (
		<div className='search' role='search'>
			<input
				aria-label='Search'
				name={name}
				placeholder={placeholder}
				type={type}
				onChange={(e) => handleChange(e)}
				value={query}
				onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) =>
					handleKeyPress(e, query)
				}
			/>
			<button
				className='button'
				onClick={() => handleSearchClick(query)}
				role='searchButton'
			>
				<SearchIcon />
			</button>
		</div>
	);
};
