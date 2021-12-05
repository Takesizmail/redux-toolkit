import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMarket, IMarketFilter, IMarketsData } from '../../../models/markets';

interface InitialState {
	pending: boolean
	markets: IMarketsData | null,
	error: string | unknown
	selectedMarket: IMarket | null
	filter: Partial<IMarketFilter>
}

const initialState: InitialState = {
	pending: false,
	markets: null,
	error: '',
	selectedMarket: null,
	filter: {}
}

export const marketsSlice = createSlice({
	name: 'markets',
	initialState,
	reducers: {
		setPending: (state, action: PayloadAction<boolean>,) => {
			state.pending = action.payload;
		},
		fetchMarketsSuccess: (state, action: PayloadAction<IMarketsData>) => {
			state.markets = action.payload;
			state.error = '';
			state.pending = false;
		},
		fetchPayloadError: (state, action: PayloadAction<unknown>) => {
			state.error = action.payload;
			state.pending = false;
		},
		fetchMarketDetails: (state, action: PayloadAction<IMarket>) => {
			state.selectedMarket = action.payload;
			state.pending = false;
		},
		fetchMarketError: (state, action: PayloadAction<unknown>) => {
			state.error = action.payload;
			state.pending = false
		},
		setFilter: (state, action: PayloadAction<Partial<IMarketFilter>>) => {
			state.filter = action.payload
		},
	}
})

export default marketsSlice.reducer
