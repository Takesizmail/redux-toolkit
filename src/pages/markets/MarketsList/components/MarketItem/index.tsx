import React, { FC } from 'react';
import { IMarket } from '../../../../../models/markets';
import { Item, StyledArrow } from '../../styled';
import Text from '../../../../../components/base/Text'
import { Colors } from '../../../../../common/constants/colors';
import arrow from '../../../../../common/images/right-arrow.png'


const MarketItem: FC<IMarket> = ({symbol, country, ipoYear, name, createdAt,  ...props}) => {
	return (
		<Item>
			<Text color={Colors.primary} size={18} width='50px' >{symbol}</Text>
			<Text size={16} width='200px' >{name}</Text>
			<Text width='100px'>{country}</Text>
			<Text width='100px'>{ipoYear}</Text>
			<StyledArrow  src={arrow} alt='some' />
		</Item>
	);
};

export default MarketItem;
