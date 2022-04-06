import BodyApp from './components/BodyApp';
import HeaderApp from './components/HeaderApp';
import './styles/App.css';
import './styles/responsive.css';

function App() {
	return (
		<div className='App'>
			<HeaderApp></HeaderApp>
			<BodyApp></BodyApp>
		</div>
	);
}

export default App;
