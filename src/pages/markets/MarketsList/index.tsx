import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { ReactComponent as Loader } from '../../../common/images/loader.svg'
import { fetchMarkets, setMarketFilter } from '../../../store/modules/markets/action';
import { StyledMarkets } from './styled';
import { IMarket } from '../../../models/markets';
import MarketItem from './components/MarketItem';
import Paginator, { IPaginationHandlerEvent } from './components/Paginator';
import ReduxFilter from './components/Filter';

const MarketsList = () => {
	const dispatch = useAppDispatch();
	const { markets, pending, filter } = useAppSelector(state => state.marketsReducer)

	useEffect(() => {
		// dispatch(fetchMarkets(filter))
	}, [dispatch, filter])

	const handlePaginationClick = (value: IPaginationHandlerEvent) => {
		const params = {
			offset: value.selected * 10
		}

		dispatch(fetchMarkets({...params, ...filter}))
	}

	const handleFilter = (values: any) => {
		dispatch(setMarketFilter(values));
	}

	if (pending || !markets) {
		return <Loader/>
	}

	return (
		<>
			<ReduxFilter onSubmit={handleFilter} s={filter.s} />
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
