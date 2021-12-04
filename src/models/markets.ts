
interface ISector {
	[key: string]: typeof key
}

interface Industry {
	[key: string]: typeof key
}

export interface Markets {
	symbol: string;
	name: string;
	country: string;
	industry?: Industry;
	industryId: number;
	ipoYear: number;
	sector: ISector;
	marketCap: number;
	sectorId: null | number;
	volume: null | number;
	netChange: number;
	netChangePercent: number;
	lastPrice: number;
	type: null | string;
	createdAt: string;
	updatedAt: string;
	id: number;




}
