import React, { FC } from 'react';
import { IMarket } from '../../../../../models/markets';
import { Item, StyledArrow, StyledLink } from '../../styled';
import Text from '../../../../../components/base/Text'
import { Colors } from '../../../../../common/constants/colors';
import arrow from '../../../../../common/images/right-arrow.png'
import { ROUTE_PATH } from '../../../../../common/constants/routePath';

type PropsType = IMarket

/**
 * Item in Market's List.
 *
 * @param symbol {string} - Redux value. Symbol of Market.
 * @param country {string} - Redux value. Country of Market.
 * @param ipoYear {number} - Redux value. ipoYear of Market.
 * @param name {string} - Redux value. Name of Market
 * @param id {number} = Redux value. Id of Markets, needs for Redirect to EditMarket page
 * @constructor
 */
const MarketItem: FC<PropsType> = ({symbol, country, ipoYear, name, id}) => {
	return (
		<Item>
			<StyledLink to={`${ROUTE_PATH.markets}/${id}`}>
				<Text color={Colors.primary} size={18} width='50px'>{symbol}</Text>
				<Text size={16} width='200px'>{name}</Text>
				<Text width='100px'>{country}</Text>
				<Text width='100px'>{ipoYear}</Text>
				<StyledArrow src={arrow} alt='some'/>
			</StyledLink>
		</Item>
	);
};

export default MarketItem;
