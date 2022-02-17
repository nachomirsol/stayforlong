/** Styles */
import './styles/loader.scss';

export const Loader = () => {
	return (
		<div className='loader'>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='spin'
			>
				{/* <rect width='100' height='100' rx='3' fill='white' /> */}
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M71.8124 37.7845C73.9025 41.5166 75 45.7225 75 50H67C67 40.6112 59.3888 33 50 33C40.6112 33 33 40.6112 33 50C33 55.6542 35.7603 60.6636 40.007 63.7543L35.3054 70.2254C31.8448 67.7112 29.0872 64.3511 27.2964 60.4665C25.5056 56.5819 24.7415 52.3028 25.0771 48.0385C25.4127 43.7742 26.8368 39.6674 29.2133 36.1108C31.5897 32.5541 34.839 29.6668 38.6502 27.7248C42.4615 25.7829 46.7073 24.8513 50.9815 25.0193C55.2557 25.1872 59.4153 26.449 63.0625 28.684C66.7096 30.919 69.7223 34.0524 71.8124 37.7845Z'
					fill='#444444'
					className='path'
				/>
			</svg>
		</div>
	);
};