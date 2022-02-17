import { useEffect } from 'react';
/** Components */
import { Search } from 'components/search';
import { CharacterList } from 'components/characterList';
/** Styles */
import './app.scss';
import { useCharacters } from './hooks/useCharacters';

export const App = () => {
	const {
		loading,
		error,
		characters,
		query,
		handleChange,
		handleSearchClick,
		handleKeyPress,
	} = useCharacters();
	return (
		<div className='app'>
			<h3>Search your character</h3>
			<Search
				query={query}
				onChange={handleChange}
				onClick={(query: string) => handleSearchClick(query)}
				onKeyPress={(e: React.SyntheticEvent<EventTarget>, query: string) =>
					handleKeyPress(e, query)
				}
			/>
			<CharacterList loading={loading} error={error} characters={characters} />
		</div>
	);
};
