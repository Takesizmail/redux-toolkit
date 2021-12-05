import React, { FC } from 'react';
import { StyledTitle } from './styled';

interface IProps {
	children: React.ReactNode;
	color?: string
}

/**
 * Common H1 title
 * @param props {Object} - ...props
 * @constructor
 */
const Title: FC<IProps> = (props) => {
	return <StyledTitle {...props} />;
};

export default Title;
