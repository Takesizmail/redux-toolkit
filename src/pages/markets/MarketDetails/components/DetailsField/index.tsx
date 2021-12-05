import React, { FC } from 'react';
import { Field } from '../../styled';
import Text from '../../../../../components/base/Text';
import { Colors } from '../../../../../common/constants/colors';

interface IProps {
	label: string,
	value: string | null
}

/**
 * Component for displaying market detail
 *
 * @param label
 * @param value
 * @constructor
 */
const DetailsField: FC<IProps> = ({ label, value }) => {
	return (
		<Field>
			<Text textTransform='Capitalize' size={18} color={Colors.primary} margin='0 0 10px 0'>{label}</Text>
			<Text margin='0'>{value? value : 'Немає даних'}</Text>
		</Field>
	);
};

export default DetailsField;
