import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding: 50px;
`

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
	margin-bottom: 20px;
`

export const Label = styled.label`
	margin-bottom: 10px;
	display: inline-block;
`
