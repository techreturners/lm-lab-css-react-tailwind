import './App.css';
import { PropertiesList } from './components/properties_list';

function App() {
	return (
		<>
			<h1>Welcome to Marvelous Mansions</h1>
			<h2>A one stop shop to your dream property!</h2>
			<h3>Current property listings:</h3>
			<PropertiesList />
		</>
	);
}

export default App;
