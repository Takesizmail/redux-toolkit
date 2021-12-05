import React, { FC } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { RootState } from '../../../../../store/store';
import { connect } from 'react-redux';
import { Grid, StyledForm } from '../../styled';
import Label from '../../../../../components/base/Label';
import SubmitButton from '../../../../../components/base/SubmitButton';

interface IOwnProps {
	s?: string
}

interface IFormValue {
	s: string
}


type PropsType = InjectedFormProps<IFormValue, IOwnProps> & IOwnProps

/**
 * Filter Component
 *
 * @param handleSubmit {Function} - Redux-form handler for submitting
 * @constructor
 */
const Filter: FC<PropsType> = ({ handleSubmit }) => {
	return (
		<StyledForm onSubmit={handleSubmit}>
			<Grid>
				<Label label='Search' name='s' type='text' />
			</Grid>

			<SubmitButton
				type='submit'
			>
				Submit
			</SubmitButton>
		</StyledForm>
	);
};

let ReduxFilter = reduxForm<IFormValue, IOwnProps>({
	form: 'marketsFilter',
})(Filter)

const mapStateToProps = (state: RootState, props: any) => ({

})

// @ts-ignore
ReduxFilter = connect(mapStateToProps)(ReduxFilter)

export default ReduxFilter;
