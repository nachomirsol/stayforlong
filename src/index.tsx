import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/** Store */
import { configureStore } from 'store/store';
import { App } from './App';
import './index.scss';

ReactDOM.render(
	<Provider store={configureStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
