import React, { FC } from 'react';
import { StyledButton } from './styled';

interface IProps {
	type: "button" | "submit" | "reset" | undefined
}

const SubmitButton: FC<IProps> = (props) => {
	return <StyledButton {...props} />;
};

export default SubmitButton;
