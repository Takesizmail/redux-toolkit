import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMarketsData } from '../../../models/markets';

interface InitialState {
	pending: boolean
	markets: IMarketsData | null,
	error: string | unknown
}

const initialState: InitialState = {
	pending: false,
	markets: null,
	error: ''
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
			state.pending = false;
		},
		fetchMarketsError: (state, action: PayloadAction<unknown>) => {
			state.error = action.payload
			state.pending = false;
		}
	}
})

export default marketsSlice.reducer
