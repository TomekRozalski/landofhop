import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { AppErrorContext, AuthenticationContext } from 'config';
import { getCountriesList as getCountriesListAction } from 'store/actions';
import { SecondaryForm } from '../../elements';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const AddNewPlace = ({ hide, getCountriesList }) => {
	const { token } = useContext(AuthenticationContext);
	const { setAppError } = useContext(AppErrorContext);

	return (
		<SecondaryForm>
			<Formik
				initialValues={initialFormValues}
				onSubmit={onSubmit({
					getCountriesList,
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

AddNewPlace.propTypes = {
	getCountriesList: PropTypes.func.isRequired,
	hide: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	getCountriesList: getCountriesListAction,
};

export default connect(null, mapDispatchToProps)(AddNewPlace);
