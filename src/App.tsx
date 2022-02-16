import { useEffect } from 'react';
/** Components */
import { Search } from 'components/search';
import { CharacterList } from 'components/characterList';
/** Styles */
import './app.scss';
import { useCharacters } from './hooks/useCharacters';

export const App = () => {
	const { handleChange, handleSearchClick, loading, error, characters, query } =
		useCharacters();
	return (
		<div className='app'>
			<Search
				width={'50%'}
				query={query}
				onChange={handleChange}
				onClick={(query: string) => handleSearchClick(query)}
			/>
			<CharacterList loading={loading} error={error} characters={characters} />
		</div>
	);
};
