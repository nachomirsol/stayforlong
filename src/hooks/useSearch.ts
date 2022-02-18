import { useState } from 'react';
/** Libraries */
import { useDispatch } from 'react-redux';
/** Actions */
import { getCharacter, getCharacterList } from 'store/characters/actions';

export const useSearch = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleKeyPress = (
		e: React.KeyboardEvent<HTMLDivElement>,
		querySearch: string
	) => {
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
		query,
		handleChange,
		handleSearchClick,
		handleKeyPress,
	};
};
