import styled from 'styled-components';
import { IProps } from './index';

export const StyledText = styled('span')<Omit<IProps, 'children'>>`
	font-size: ${(props) => props.size || '16' }px;
	color: ${(props) => props.color || 'black' };
	width: ${(props) => props.width || 'auto' };
  margin: ${(props) => props.margin || 'auto' };
	display: inline-block;
`
