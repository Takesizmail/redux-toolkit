import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Colors } from '../../../common/constants/colors';

export const NavigationLink = styled(NavLink)`
	font-weight: 700;
	font-size: 18px;
  text-decoration: none;
  color: black;
	cursor: pointer;
	transition: 0.5s;
	&.active {
		color: ${Colors.primary};
		font-size: 20px;
	}
`
