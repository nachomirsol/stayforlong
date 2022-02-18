import { useEffect } from 'react';
/** Libraries */
import { useDispatch, useSelector } from 'react-redux';
/** Actions */
import { getCharacterList } from 'store/characters/actions';
/** Types */
import { CharacterState } from 'store/characters/types';
import { RootState } from 'store/rootReducer';

export const useCharacters = () => {
	const dispatch = useDispatch();

	const { loading, error, characters }: CharacterState = useSelector(
		(state: RootState) => state?.characters
	);

	useEffect(() => {
		console.log('rerender hook');
		dispatch(getCharacterList());
	}, []);

	return {
		loading,
		error,
		characters,
		getCharacterList,
	};
};
