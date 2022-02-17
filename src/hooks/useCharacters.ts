import { useState, useEffect } from 'react';
/** Libraries */
import { useDispatch, useSelector } from 'react-redux';
/** Actions */
import { getCharacter, getCharacterList } from 'store/characters/actions';
/** Types */
import { CharacterState } from 'store/characters/types';
import { RootState } from 'store/rootReducer';

export const useCharacters = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const { loading, error, characters }: CharacterState = useSelector(
		(state: RootState) => state?.characters
	);

	useEffect(() => {
		dispatch(getCharacterList());
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>, querySearch: string) => {
		if (e.key === 'Enter' && querySearch !== '') {
			dispatch(getCharacter(querySearch));
		}
	};

	const handleSearchClick = (querySearch: string) => {
		if (querySearch !== '') {
			dispatch(getCharacter(querySearch));
		} else {
			dispatch(getCharacterList());
		}
	};

	return {
		loading,
		error,
		characters,
		query,
		handleChange,
		handleSearchClick,
		handleKeyPress,
		getCharacterList,
	};
};
