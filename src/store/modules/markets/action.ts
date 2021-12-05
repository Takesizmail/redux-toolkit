import { AppDispatch } from '../../store';
import { marketsSlice } from './reducer';
import {
	createMarketRequest,
	getMarketsRequest,
	fetchMarketDetailsRequest,
	updateMarketRequest,
	removeMarketRequest
} from './api';
import { IFetchMarkets } from './types';
import { IMarket, IMarketFilter } from '../../../models/markets';

/**
 * Action. Get all Markets from API.
 *
 * @param params {Object} - Filter and Pagination property
 */
export const fetchMarkets = (params: IFetchMarkets & Partial<IMarketFilter>) => async (dispatch: AppDispatch) => {
	try {
		const { setPending, fetchMarketsSuccess } = marketsSlice.actions;
		dispatch(setPending(true));
		const response = await getMarketsRequest(params);
		dispatch(fetchMarketsSuccess(response));
	} catch (e: unknown) {
		dispatch(marketsSlice.actions.fetchPayloadError(e));
		throw new Error("FETCH MARKETS ERROR");
	}
}

/**
 * Action. Create new Market
 *
 * @param params {Object} - Values for creating new Market
 */
export const createMarket = (params: Partial<IMarket>) => async (dispatch: AppDispatch) => {
	try {
		const { setPending } = marketsSlice.actions;
		dispatch(setPending(true));
		await createMarketRequest(params);
		dispatch(setPending(false));
	} catch (e: unknown) {
		dispatch(marketsSlice.actions.fetchPayloadError(e));
		throw new Error("CREATE MARKET ERROR");
	}
}

/**
 * Action. Get one Market
 *
 * @param id {number} = Id of Market
 */
export const fetchSelectedMarket = (id: number) => async (dispatch: AppDispatch) => {
	try {
		const { setPending, fetchMarketDetails } = marketsSlice.actions;
		dispatch(setPending(true));
		const response = await fetchMarketDetailsRequest(id);
		dispatch(fetchMarketDetails(response));
	} catch (e: unknown) {
		dispatch(marketsSlice.actions.fetchPayloadError(e));
		throw new Error("CREATE MARKET ERROR");
	}
}

/**
 * Action. Update market.
 *
 * @param id {number} - Id of Market
 * @param params {Object} - Values for updating Market
 */
export const updateMarket = (id: number, params: Partial<IMarket>) => async (dispatch: AppDispatch) => {
	try {
		const { setPending } = marketsSlice.actions;
		dispatch(setPending(true));
		await updateMarketRequest(id, params);
		dispatch(setPending(false));
 	} catch (e: unknown) {
		dispatch(marketsSlice.actions.fetchPayloadError(e));
		throw new Error("UPDATE MARKET ERROR");
	}
}

/**
 * Action. Remove market from API
 *
 * @param id {number} - Id of market.
 */
export const removeMarket = (id: number) => async (dispatch: AppDispatch) => {
	try {
		const { setPending } = marketsSlice.actions;
		dispatch(setPending(true));
		await removeMarketRequest(id);
		dispatch(setPending(false));
	} catch (e: unknown) {
		dispatch(marketsSlice.actions.fetchPayloadError(e));
	}
}

/**
 * Action. Set filter to Store.
 *
 * @param params {Object} - Values of Market Filter.
 */
export const setMarketFilter = (params: Partial<IMarketFilter>) => (dispatch: AppDispatch) => {
	dispatch(marketsSlice.actions.setFilter(params))
}
