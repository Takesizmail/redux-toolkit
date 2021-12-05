import React, { FC } from 'react';
import { NavigationLink } from './styled';

interface IProps {
	to: string;
	children: React.ReactNode;
}

/**
 * NavLink from react-router-dom
 *
 * @param props {Object} - ...props
 * @constructor
 */
const NavLink: FC<IProps> = (props) => {
	return <NavigationLink end {...props} />
};

export default NavLink;
