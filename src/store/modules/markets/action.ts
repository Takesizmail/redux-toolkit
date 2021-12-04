import { AppDispatch } from '../../store';
import { marketsSlice } from './reducer';
import { getMarketsRequest } from './api';
import { IFetchMarkets } from './types';

export const fetchMarkets = (params?: IFetchMarkets) => async (dispatch: AppDispatch) => {
	try {
		const {setPending, fetchMarketsSuccess} = marketsSlice.actions;
		dispatch(setPending(true));
		const response = await getMarketsRequest(params);
		dispatch(fetchMarketsSuccess(response));
	} catch (e: unknown) {
		dispatch(marketsSlice.actions.fetchMarketsError(e));
	}
}
