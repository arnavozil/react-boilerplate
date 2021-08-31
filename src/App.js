import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import Warning from './widgets/Warning/Warning';


const App = () => {
	return (
		<Provider store={store}>
			<Warning>
				<Routes />
			</Warning>
		</Provider>		
	);
}

export default App;
