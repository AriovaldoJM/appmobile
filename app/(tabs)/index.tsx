import { StatusBar } from 'expo-status-bar';
import { Home } from '../../src/screens/Home';

export default function App() {
	return (
		<>
			<StatusBar 
				style='dark'
				backgroundColor="#0a7ea4"
				translucent={true}
			/>
			<Home/>
		</>
	);
}

