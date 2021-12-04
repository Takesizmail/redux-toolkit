import React, { FC } from 'react';
import { StyledText } from './styled';

export interface IProps {
	size?: number;
	children?: React.ReactNode;
	color?: string;
	width?: string;
	margin?: string;
}

const Text: FC<IProps> = (props) => {
	return <StyledText {...props} />
};

export default Text;
