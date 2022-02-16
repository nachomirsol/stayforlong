/** Components */
import { Card } from 'components/card';
/** Hooks */
import { useCharacters } from 'hooks/useCharacters';
/** Styles */
import './styles/characterList.scss';

export const CharacterList = () => {
	const { loading, error, characters } = useCharacters();
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
