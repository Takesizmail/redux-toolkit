import request from '../../request';
import { IFetchMarkets } from './types';

export const getMarketsRequest = (params?: IFetchMarkets) => {
		const query = {
			limit: 10,
			offset: params ? params.offset : 0
		}

		return request.get('markets', query)
}
