/** Assets */
import { ArrowIcon } from 'assets/icons/arrow';
/** Styles */
import './styles/card.scss';

export const Card = () => {
	return (
		<div className='card'>
			<div className='card__image'>Img</div>
			<div className='card__content'>
				<div className='card__content-text'>
					<h5>Storm</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada viverra masas
					</p>
				</div>
				<button>
					Read more <ArrowIcon />
				</button>
			</div>
		</div>
	);
};
