import { useState } from 'react';
import Container from './components/container/Container';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
	const [values, setValues] = useState({
		name: 'JANE APPLESEED',
		cardNumber: '0000 0000 0000 0000',
		exDateMonth: '00',
		exDateYear: '00',
		cvc: '000'
	});
	return (
		<>
			<GlobalStyle />
			<Container values={values} setValues={setValues} />
		</>
	);
};

export default App;
