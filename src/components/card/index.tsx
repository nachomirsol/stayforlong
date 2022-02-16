/** Assets */
import { ArrowIcon } from 'assets/icons/arrow';
/** Types */
import { CardTypes } from './types';
/** Styles */
import './styles/card.scss';

export const Card = ({ name, description, thumbnail }: CardTypes) => {
	const { path, extension } = thumbnail;
	return (
		<div className='card'>
			<div className='card__image'>
				<img src={`${path}.${extension}`} />
			</div>
			<div className='card__content'>
				<div className='card__content-text'>
					<h5>{name}</h5>
					<p>{description || 'No description provided'}</p>
				</div>
				<button>
					Read more <ArrowIcon />
				</button>
			</div>
		</div>
	);
};
