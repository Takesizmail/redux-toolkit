import React, { FC } from 'react';
import Text from '../Text';
import { Colors } from '../../../common/constants/colors';
import { Field } from 'redux-form';
import Input from '../Input';

interface IProps {
	label: string,
	name: string
	type: 'text' | 'number'
}

/**
 *
 *
 * @param label {string} - Label under input
 * @param name {string} - Input value for redux-form
 * @param type {string} - Input type
 * @constructor
 */
const Label: FC<IProps> = ({label, name, type}) => {
	return (
		<label>
			<Text color={Colors.black} margin='0 0 10px 12px'>{label}</Text>
			<Field
				name={name}
				component={Input}
				placeholder={''}
				type={type}
			/>
		</label>
	);
};

export default Label;
