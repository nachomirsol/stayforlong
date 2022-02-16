/** Components */
import { Card } from 'components/card';
/** Types */
import { CharacterListTypes } from './types';
/** Styles */
import './styles/characterList.scss';

export const CharacterList = ({
	loading,
	error,
	characters,
}: CharacterListTypes) => {
	if (loading) {
		return <span>loading...</span>;
	}
	if (error) {
		return <span>Error...</span>;
	}
	if (characters.length === 0) {
		return <span>No content...</span>;
	}
	return (
		<div className='characterList'>
			{characters.map(({ id, name, description, thumbnail }: any) => {
				return (
					<Card
						key={id}
						name={name}
						description={description}
						thumbnail={thumbnail}
					/>
				);
			})}
		</div>
	);
};
