import request from '../../request';
import { IFetchMarkets } from './types';
import { IMarket, IMarketFilter } from '../../../models/markets';

export const getMarketsRequest = (params: IFetchMarkets & Partial<IMarketFilter>) => {
		const query = {
			...params,
			limit: 10,
			offset: params ? params.offset : 0
		}
		return request.get('markets', query)
}

export const createMarketRequest = (params: Partial<IMarket>) => {
	return request.post('markets', params)
}

export const fetchMarketDetailsRequest = (id: number) => {
	return request.get(`markets/${id}`)
}

export const updateMarketRequest = (id: number, params: Partial<IMarket>) => {
	return request.put(`markets/${id}`, params)
}

export const removeMarketRequest = (id: number) => {
	return request.delete(`markets/${id}`)
}
