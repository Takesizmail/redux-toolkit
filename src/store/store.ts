import { combineReducers, configureStore } from '@reduxjs/toolkit';
import marketsReducer from './modules/markets/reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	marketsReducer,
	form: formReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
