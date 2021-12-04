import request from '../../request';
import { IFetchMarkets } from './types';
import { IMarket } from '../../../models/markets';

export const getMarketsRequest = (params?: IFetchMarkets) => {
		const query = {
			limit: 10,
			offset: params ? params.offset : 0
		}

		return request.get('markets', query)
}

export const createMarketRequest = (params: Partial<IMarket>) => {
	return request.post('markets', params)
}
