import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../common/constants/colors';

export const Container = styled.div`
  background: ${Colors.white};
`

export const ButtonContainer = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-between;
`

export const StyledLink = styled(Link)`
	display: block;
	outline: none;
	padding: 15px 30px;
	font-size: 18px;
	background-color: ${Colors.yellow};
	color: white;
	width: 120px;
	text-align: center;
	border-radius: 5px;
	cursor: pointer;
	margin-left: auto;
	text-decoration: none;
`

export const StyledButton = styled.button`
  display: block;
  outline: none;
  padding: 15px 30px;
  font-size: 18px;
  background-color: ${Colors.primary};
  color: white;
  width: 120px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
	border: none;
`


export const DetailsContainer = styled.div`
	
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
	padding: 5px;
`

export const Field = styled.div`
	width: 100%;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 10px;
	border: 2px solid black;
`
