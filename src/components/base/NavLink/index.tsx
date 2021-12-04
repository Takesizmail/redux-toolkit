import React, { FC } from 'react';
import { NavigationLink } from './styled';

interface IProps {
	to: string;
	children: React.ReactNode;
}

const NavLink: FC<IProps> = (props) => {

	return <NavigationLink {...props} end/>
};

export default NavLink;
