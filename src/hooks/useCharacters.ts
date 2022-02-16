import { useState, useEffect } from 'react';
/** Libraries */
import { useDispatch, useSelector } from 'react-redux';
/** Actions */
import { getCharacterList } from 'store/characters/actions';

export const useCharacters = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const { loading, error, characters } = useSelector(
		(state) => state?.characters
	);

	useEffect(() => {
		dispatch(getCharacterList());
	}, []);

	return {
		loading,
		error,
		characters,
	};
};
