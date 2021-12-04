import React, { FC } from 'react';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { IMarket } from '../../../../../models/markets';
import { FormContainer } from '../../styled';
import Input from '../../../../../components/base/Input'
import Text from '../../../../../components/base/Text'
import { Colors } from '../../../../../common/constants/colors';
import SubmitButton from '../../../../../components/base/SubmitButton';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';


interface IOwnProps {
}

type Props = InjectedFormProps<Partial<IMarket>> & IOwnProps

const MarketForm: FC<Props> = ({handleSubmit, error}) => {

	return (
		<form onSubmit={handleSubmit}>
			<FormContainer>
				<label>
					<Text color={Colors.black} margin='0 0 10px 12px'>Symbol*  </Text>
					<Field
						name='symbol'
						component={Input}
						placeholder={''}
						type='text'
					/>
				</label>

				<label>
					<Text color={Colors.black} margin='0 0 10px 12px'>Name </Text>
					<Field
						name='name'
						component={Input}
						placeholder={''}
						type='text'
					/>
				</label>
				<label>
					<Text color={Colors.black} margin='0 0 10px 12px'>Country </Text>
					<Field
						name='country'
						component={Input}
						placeholder={''}
						type='text'
					/>
				</label>
				<label>
					<Text color={Colors.black} margin='0 0 10px 12px'>Market Cap</Text>
					<Field
						name='marketCap'
						component={Input}
						placeholder={''}
						type='text'
					/>
				</label>
				<label>
					<Text color={Colors.black} margin='0 0 10px 12px'>Net Change</Text>
					<Field
						name='netChange'
						component={Input}
						placeholder={''}
						type='text'
					/>
				</label>

				<label>
					<Text color={Colors.black} margin='0 0 10px 12px'>Net Change Percent</Text>
					<Field
						name='netChangePercent'
						component={Input}
						placeholder={''}
						type='text'
					/>
				</label>
				<label>
					<Text color={Colors.black} margin='0 0 10px 12px'>Last Price</Text>
					<Field
						name='last Price'
						component={Input}
						placeholder={''}
						type='text'
					/>
				</label>
				<label>
					<Text color={Colors.black} margin='0 0 10px 12px'>Type</Text>
					<Field
						name='type'
						component={Input}
						placeholder={''}
						type='text'
					/>
				</label>
			</FormContainer>

				<SubmitButton
					type='submit'
				>
					Submit
				</SubmitButton>
		</form>
	);
};

const CreateMarketForm = reduxForm<Partial<IMarket>>({
	form: 'marketForm',
})(MarketForm)

export default CreateMarketForm;
