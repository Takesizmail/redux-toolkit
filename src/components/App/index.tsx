import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import MarketsList from '../../pages/markets/MarketsList';
import { AppContainer } from './styled';
import { ROUTE_PATH } from '../../common/constants/routePath';
import MarketCreate from '../../pages/markets/MarketCreate';
import MarketDetails from '../../pages/markets/MarketDetails';
import MarketEdit from '../../pages/markets/MarketEdit';

const App = () => {

	return (
		<AppContainer>
			<Header />
			<Routes>
				<Route path={ROUTE_PATH.markets} element={<MarketsList />}/>
				<Route path={ROUTE_PATH.markets_details} element={<MarketDetails />}/>
				<Route path={ROUTE_PATH.markets_create} element={<MarketCreate />}/>
				<Route path={ROUTE_PATH.markets_edit_id} element={<MarketEdit />}/>
			</Routes>
		</AppContainer>
	);
}

export default App;
