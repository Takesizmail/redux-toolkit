import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { ReactComponent as Loader } from '../../../common/images/loader.svg'
import { fetchMarkets } from '../../../store/modules/markets/action';
import { StyledMarkets } from './styled';
import { IMarket } from '../../../models/markets';
import MarketItem from './components/MarketItem';
import Paginator, { IPaginationHandlerEvent } from './components/Paginator';

const MarketsList = () => {

	const dispatch = useAppDispatch();
	const {markets, pending} = useAppSelector(state => state.marketsReducer)

	useEffect(() => {
		dispatch(fetchMarkets())
	}, [])

	const handlePaginationClick = (value: IPaginationHandlerEvent) => {
		const params = {
			offset: value.selected * 10
		}

		dispatch(fetchMarkets(params))
	}

	if (pending || !markets) {
		return <Loader/>
	}

	return (
		<>
			<StyledMarkets>
				{markets && markets.data.map((market: IMarket) => <MarketItem key={market.id} {...market} />)}
			</StyledMarkets>
			<Paginator
				page={markets.page}
				pageCount={markets.pageCount}
				handlePaginationClick={handlePaginationClick}
			/>
		</>
	);
};

export default MarketsList;
