import { Card } from 'components/card';
import { Search } from 'components/search';
/** Styles */
import './app.scss';
export const App = () => {
	return (
		<div className='app'>
			<Search width={'50%'} onChange={() => ({})} onClick={() => ({})} />
			<div className='cardList'>
				{[1, 2, 3, 4, 5, 6].map(() => {
					return <Card />;
				})}
			</div>
		</div>
	);
};
