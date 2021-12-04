import React from 'react';
import NavLink from '../base/NavLink';
import { ROUTE_PATH } from '../../common/constants/routePath';
import { Nav } from './styled';

const Header = () => {
	return (
		<Nav>
			<NavLink to={ROUTE_PATH.markets}> Markets </NavLink>
			<NavLink to={ROUTE_PATH.markets_create}> Create new one </NavLink>
		</Nav>
	);
};

export default Header;
