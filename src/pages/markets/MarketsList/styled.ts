import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { Colors } from '../../../common/constants/colors';

export const  StyledReactPaginate = styled(ReactPaginate)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
  & > li {
    list-style-type: none;
		cursor: pointer;
	}
	& .link {
		padding: 5px 10px;
	}
	& .link__active {
    background-color: ${Colors.primary};
		
	}
`

export const StyledMarkets = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 0 20px 0;
	padding: 0;
	& > li + li {
		margin-top: 20px;
	}
`

export const Item = styled.li`
	width: 100%;
	padding: 20px;
	background: rgba(255,255,255,.55);
  list-style-type: none;
	display: flex;
	align-items: center;
	cursor: pointer;
	& > span + span {
		margin-left: 50px;
	}
`

export const StyledArrow = styled.img`
	margin-left: auto;
`
