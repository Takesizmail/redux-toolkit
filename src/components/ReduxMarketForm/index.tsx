import React, { FC } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { FormContainer } from './styled';
import { connect } from 'react-redux';
import SubmitButton from '../base/SubmitButton';
import { RootState } from '../../store/store';
import Label from '../base/Label';

interface IOwnProps {
	symbol?: string;
	name?: string;
	country?: string;
	marketCap?: number;
	netChange?: number;
	netChangePercent?: number;
	lastPrice?: number;
	type?: string | null;
}

interface IFormValue {
	symbol: string
	name: string
	country: string
	marketCap: number
	netChange: number
	netChangePercent: number
	type: string
	lastPrice: number;
}

type PropsType = InjectedFormProps<IFormValue, IOwnProps> & IOwnProps

/**
 * Redux form for Create and Edit Markets.
 *
 * @param handleSubmit {Function} - Submit form handler.
 * @constructor
 */
const MarketForm: FC<PropsType> = ({ handleSubmit }) => {

	return (
		<form onSubmit={handleSubmit}>
			<FormContainer>
				<Label label='Symbol*' name='symbol' type='text' />
				<Label label='Name' name='name' type='text' />
				<Label label='Country' name='country' type='text' />
				<Label label='Market Cap' name='marketCap' type='number' />
				<Label label='Net Change' name='netChange' type='number' />
				<Label label='Net Change Percent' name='netChangePercent' type='number' />
				<Label label='Last Price' name='lastPrice' type='number' />
				<Label label='Type' name='type' type='number' />
			</FormContainer>
			<SubmitButton
				type='submit'
			>
				Submit
			</SubmitButton>
		</form>
	);
};

let ReduxMarketForm = reduxForm<IFormValue, IOwnProps>({
	form: 'marketForm',
})(MarketForm)

const mapStateToProps = (state: RootState, props: any) => ({
	initialValues: {
		symbol: props.symbol,
		name: props.name,
		country: props.country,
		marketCap: props.marketCap,
		netChange: props.netChange,
		netChangePercent: props.netChangePercent,
		type: props.type,
		lastPrice: props.lastPrice,
	},
});

// @ts-ignore
ReduxMarketForm = connect(mapStateToProps)(ReduxMarketForm)

export default ReduxMarketForm;
