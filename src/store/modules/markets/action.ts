import { AppDispatch } from '../../store';
import { marketsSlice } from './reducer';
import { createMarketRequest, getMarketsRequest } from './api';
import { IFetchMarkets } from './types';
import axios from 'axios'
import { IMarket } from '../../../models/markets';

export const fetchMarkets = (params?: IFetchMarkets) => async (dispatch: AppDispatch) => {
	try {
		const {setPending, fetchMarketsSuccess} = marketsSlice.actions;
		dispatch(setPending(true));
		const response = await getMarketsRequest(params);
		dispatch(fetchMarketsSuccess(response));
	} catch (e: unknown) {
		dispatch(marketsSlice.actions.fetchMarketsError(e));
		console.log('here')
		throw new Error("FETCH MARKETS ERROR");
	}
}

export const createMarket = (params: Partial<IMarket>) => async (dispatch: AppDispatch) => {
	try {
		const { setPending } = marketsSlice.actions;
		dispatch(setPending(true))
		 const response = await axios.post('http://173.212.193.40:5486/markets', params);
		console.log('response', response)
		// await createMarketRequest(params)
		dispatch(setPending(false));
	} catch (e: unknown) {
		dispatch(marketsSlice.actions.fetchMarketsError(e));
		throw new Error("CREATE MARKET ERROR");
	}
}
