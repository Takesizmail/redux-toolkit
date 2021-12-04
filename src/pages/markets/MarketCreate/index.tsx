import React from 'react';
import { Container } from './styled'
import CreateMarketForm from './components/CreateMarketForm';
import { useAppDispatch } from '../../../hooks/redux';
import { createMarket } from '../../../store/modules/markets/action';
import { IMarket } from '../../../models/markets';

const MarketCreate = () => {
	const dispatch = useAppDispatch();

	const handleSubmit = (values: Partial<IMarket>) => {
		dispatch(createMarket(values))
	}

	return (
		<Container>
			<CreateMarketForm onSubmit={handleSubmit} />
		</Container>
	);
};

export default MarketCreate;
