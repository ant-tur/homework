class NBUService {
	_urlNBU =
		'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';

	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getFilterCurrency = async () => {
		const res = await this.getResource(this._urlNBU);

		return res.map(this._transformData).filter((data) => {
			return data.name === 'USD' || data.name === 'EUR' || data.name === 'RUB';
		});
	};

	_transformData = (data) => {
		return {
			name: data.cc,
			rate: data.rate,
		};
	};
}

export default NBUService;
