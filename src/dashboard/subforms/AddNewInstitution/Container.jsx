import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppErrorContext, AuthenticationContext } from 'config';
import { getInstitutionsList as getInstitutionsListAction } from 'store/actions';
import { SecondaryForm } from 'dashboard/elements';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const AddNewInstitution = ({ hide, getInstitutionsList }) => {
	const { token } = useContext(AuthenticationContext);
	const { setAppError } = useContext(AppErrorContext);

	return (
		<SecondaryForm>
			<Formik
				initialValues={initialFormValues}
				onSubmit={onSubmit({
					getInstitutionsList,
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

AddNewInstitution.propTypes = {
	getInstitutionsList: PropTypes.func.isRequired,
	hide: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
	getInstitutionsList: getInstitutionsListAction,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddNewInstitution);
