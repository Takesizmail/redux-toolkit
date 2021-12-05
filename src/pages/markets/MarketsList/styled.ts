import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { Colors } from '../../../common/constants/colors';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
	width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
	text-decoration: none;
`

export const StyledArrow = styled.img`
	margin-left: auto;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
	margin-bottom: 20px;
`

export const StyledForm = styled.form`
	padding: 10px;
	border: 2px solid ${Colors.black};
	margin-bottom: 40px; 
`
