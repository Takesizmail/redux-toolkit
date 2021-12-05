import React, { useEffect } from 'react';
import ReduxMarketForm from '../../../components/ReduxMarketForm';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchSelectedMarket, updateMarket } from '../../../store/modules/markets/action';
import { useParams } from 'react-router-dom';
import { ReactComponent as Loader } from '../../../common/images/loader.svg';

const MarketEdit = () => {
	const params = useParams();

	const dispatch = useAppDispatch()
	const { selectedMarket, pending } = useAppSelector(state => state.marketsReducer)

	useEffect(() => {
		if (!selectedMarket) {
			dispatch(fetchSelectedMarket(+params.id!))
		}
	}, [selectedMarket, params.id, dispatch])

	const handleSubmit = (values: any) => {
		dispatch(updateMarket(+params.id!, values))
	}

	if (pending || !selectedMarket) {
		return <Loader/>
	}

	return (
		<div>
			<ReduxMarketForm
				onSubmit={handleSubmit}
				symbol={selectedMarket.symbol}
				name={selectedMarket.name}
				country={selectedMarket.country}
				marketCap={selectedMarket.marketCap}
				netChange={selectedMarket.netChange}
				netChangePercent={selectedMarket.netChangePercent}
				lastPrice={selectedMarket.lastPrice}
				type={selectedMarket.type}
			/>
		</div>
	);
};

export default MarketEdit;
