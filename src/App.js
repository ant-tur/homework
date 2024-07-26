import { useState } from 'react';

import NBUService from './services/NBUService';

function App({ uah }) {
	const [value, setValue] = useState(uah);

	const service = new NBUService();
	const data = service.getFilterCurrency();

	const dollar = () => {};

	const euro = () => {};

	const rub = () => {};

	const reset = () => {
		setValue(uah);
	};

	return (
		<div className='app'>
			<div className='counter'>{value}</div>
			<div className='controls'>
				<button onClick={dollar}>$</button>
				<button onClick={euro}>€</button>
				<button onClick={rub}>₽</button>
				<button onClick={reset}>RESET</button>
			</div>
		</div>
	);
}

export default App;
