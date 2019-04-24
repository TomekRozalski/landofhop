import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { AppErrorContext, AuthenticationContext } from 'config';
import { getIngredientsList as getIngredientsListAction } from 'store/actions';
import { SecondaryForm } from 'dashboard/elements';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const AddNewIngredient = ({ hide, getIngredientsList }) => {
	const { token } = useContext(AuthenticationContext);
	const { setAppError } = useContext(AppErrorContext);

	return (
		<SecondaryForm>
			<Formik
				initialValues={initialFormValues}
				onSubmit={onSubmit({
					getIngredientsList,
					hide,
					setAppError,
					token,
				})}
				validationSchema={validationSchema}
				render={FormBody({ hide })}
			/>
		</SecondaryForm>
	);
};

AddNewIngredient.propTypes = {
	getIngredientsList: PropTypes.func.isRequired,
	hide: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	getIngredientsList: getIngredientsListAction,
};

export default connect(null, mapDispatchToProps)(AddNewIngredient);
