/** Components */
import { Card } from 'components/card';
import { Loader } from 'components/loader';
/** Types */
import { Character, CharacterListTypes } from './types';
/** Styles */
import './styles/characterList.scss';

export const CharacterList = ({
	loading,
	error,
	characters,
}: CharacterListTypes) => {
	if (error) {
		return <span>Error...</span>;
	}

	return (
		<div className='characterList'>
			{loading && (
				<div className='characterList__loading'>
					<Loader />
				</div>
			)}
			{characters.length === 0 && !loading && (
				<div className='noData'>No results :(</div>
			)}
			{characters.map(
				({ id, name, description, thumbnail, urls }: Character) => {
					return (
						<Card
							key={id}
							name={name}
							description={description}
							thumbnail={thumbnail}
							url={urls[0]}
							loading={loading}
						/>
					);
				}
			)}
		</div>
	);
};
