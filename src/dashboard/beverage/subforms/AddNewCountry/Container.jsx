import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { AuthenticationContext, NotificationContext } from 'config';
import { getCountriesList as getCountriesListAction } from 'store/actions';
import { SecondaryForm } from '../../elements';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const AddNewCountry = ({ hide, getCountriesList }) => {
	const { token } = useContext(AuthenticationContext);
	const { notify } = useContext(NotificationContext);

	return (
		<SecondaryForm>
			<Formik
				initialValues={initialFormValues}
				onSubmit={onSubmit({
					getCountriesList,
					hide,
					notify,
					token,
				})}
				validationSchema={validationSchema}
				render={FormBody({ hide })}
			/>
		</SecondaryForm>
	);
};

AddNewCountry.propTypes = {
	getCountriesList: PropTypes.func.isRequired,
	hide: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	getCountriesList: getCountriesListAction,
};

export default connect(null, mapDispatchToProps)(AddNewCountry);
