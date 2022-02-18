/** Components */
import { Search } from 'components/search';
import { CharacterList } from 'components/characterList';
/** Styles */
import './app.scss';

export const App = () => {

	return (
		<div className='app'>
			<h3>Search your character</h3>
			<Search />
			<CharacterList />
		</div>
	);
};
