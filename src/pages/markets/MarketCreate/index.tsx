import React from 'react';
import { Container } from './styled'
import { useAppDispatch } from '../../../hooks/redux';
import { createMarket } from '../../../store/modules/markets/action';
import ReduxMarketForm from '../../../components/ReduxMarketForm'

const MarketCreate = () => {
	const dispatch = useAppDispatch();

	const handleSubmit = (values: any) => {
		dispatch(createMarket(values));
	}

	return (
		<Container>
			<ReduxMarketForm onSubmit={handleSubmit}/>
		</Container>
	);
};

export default MarketCreate;
