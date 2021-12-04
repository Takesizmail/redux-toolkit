import React, { FC } from 'react';
import { StyledInput } from './styled';
import { WrappedFieldProps } from 'redux-form';

interface IProps {
	type: string
}

type PropsType = WrappedFieldProps & IProps

const Input: FC<PropsType> = ({input, meta, ...props}) => {
	console.log(meta);
	return <StyledInput {...input} {...props} />
	// return <input {...props} />
};

export default Input;
