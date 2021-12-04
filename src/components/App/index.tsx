import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Header';
import MarketsList from '../../pages/markets/MarketsList';
import { AppContainer } from './styled';
import { ROUTE_PATH } from '../../common/constants/routePath';
import MarketCreate from '../../pages/markets/MarketCreate';

const App = () => {

	return (
		<AppContainer>
			<Header />
			<Routes>
				<Route path={ROUTE_PATH.markets} element={<MarketsList />}/>
				<Route path={ROUTE_PATH.markets_create} element={<MarketCreate />}/>

				<Route path='*' element={<Navigate to={'/markets'}/>}/>
			</Routes>
		</AppContainer>
	);
}

export default App;
