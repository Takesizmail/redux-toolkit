import React, { FC } from 'react';
import { StyledInput } from './styled';
import { WrappedFieldProps } from 'redux-form';

interface IProps {
	type: string
}

type PropsType = WrappedFieldProps & IProps

/**
 * Base Input for Redux-Form
 *
 * @param input {Object} - Property from react-redux
 * @param meta {Object} - Error, touch, ...etc
 * @param props {Object} - Inner Props
 * @constructor
 */
const Input: FC<PropsType> = ({ input, meta, ...props }) => {
	return <StyledInput {...input} {...props} />
};

export default Input;
