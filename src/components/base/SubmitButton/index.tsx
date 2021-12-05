import React, { FC } from 'react';
import { StyledButton } from './styled';

interface IProps {
	type: "button" | "submit" | "reset" | undefined
}

/**
 * Button for Form
 *
 * @param props {Object} = ...props
 * @constructor
 */
const SubmitButton: FC<IProps> = (props) => {
	return <StyledButton {...props} />;
};

export default SubmitButton;
