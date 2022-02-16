import { useEffect } from 'react';
/** Components */
import { Search } from 'components/search';
import { CharacterList } from 'components/characterList';
/** Styles */
import './app.scss';

export const App = () => {
	return (
		<div className='app'>
			<Search width={'50%'} onChange={() => ({})} onClick={() => ({})} />
			<CharacterList />
		</div>
	);
};
