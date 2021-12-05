import React, { useEffect } from 'react';
import { DetailsContainer, Container, ButtonContainer, StyledLink, StyledButton} from './styled';
import { useParams } from 'react-router-dom';
import { ReactComponent as Loader } from '../../../common/images/loader.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchSelectedMarket, removeMarket } from '../../../store/modules/markets/action';
import DetailsField from './components/DetailsField';
import { ROUTE_PATH } from '../../../common/constants/routePath';

const MarketDetails = () => {
	const params = useParams()

	const dispatch = useAppDispatch();
	const { selectedMarket, pending } = useAppSelector(state => state.marketsReducer)

	useEffect(() => {
		dispatch(fetchSelectedMarket(+params.id!));

	}, [params.id, dispatch])

	const removeHandler = () => {
		dispatch(removeMarket(+params.id!))
	}

	if (pending || !selectedMarket) {
		return <Loader/>
	}

	return (
		<Container>
			<DetailsContainer>
				{Object.keys(selectedMarket).map((key: string) => (
					<DetailsField key={key} label={key} value={(selectedMarket as any)[key]}/>
				))}
			</DetailsContainer>
			<ButtonContainer>
				<StyledButton onClick={removeHandler}>Remove</StyledButton>
				<StyledLink to={`${ROUTE_PATH.markets_edit}/${params.id}`}>Edit</StyledLink>
			</ButtonContainer>
		</Container>
	);
};

export default MarketDetails;
