import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	pending: boolean
}

const initialState: InitialState = {
	pending: false

}

export const marketsSlice = createSlice({
	name: 'markets',
	initialState,
	reducers: {

	}
})

export default marketsSlice.reducer
