import { useEffect, useState } from 'react';

import NBUService from './services/NBUService';

function App({ uah }) {
	const [value, setValue] = useState(uah);
	const [data, setData] = useState([]);
	const [transform, setTransform] = useState(false);

	const service = new NBUService();

	const error = () => {
		alert("Can't load data!");
	};

	useEffect(() => {
		document.title = 'NBU Service';
		service.getFilterCurrency().then(onDataLoaded).catch(error);
	}, []);

	const onDataLoaded = (data) => {
		setData(data);
	};

	const handleClick = (e) => {
		data.forEach((item) => {
			if (item.name === e.target.className && transform === false) {
				setValue((value) => Math.floor(value / item.rate));
				setTransform(true);
			}
		});
	};

	const reset = () => {
		setValue(uah);
		setTransform(false);
	};

	return (
		<div className='app'>
			<div className='counter'>{value}</div>
			<div className='controls'>
				<button onClick={handleClick} className='USD'>
					$
				</button>
				<button onClick={handleClick} className='EUR'>
					€
				</button>
				<button onClick={handleClick} className='GBP'>
					£
				</button>
				<button onClick={reset} className='reset'>
					RESET
				</button>
			</div>
		</div>
	);
}

export default App;
