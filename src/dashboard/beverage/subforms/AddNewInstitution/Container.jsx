import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { AuthenticationContext, NotificationContext } from 'config';
import { getInstitutionsList as getInstitutionsListAction } from 'store/actions';
import { SecondaryForm } from '../../elements';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const AddNewInstitution = ({ hide, getInstitutionsList }) => {
	const { token } = useContext(AuthenticationContext);
	const { notify } = useContext(NotificationContext);

	return (
		<SecondaryForm>
			<Formik
				initialValues={initialFormValues}
				onSubmit={onSubmit({
					getInstitutionsList,
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

AddNewInstitution.propTypes = {
	getInstitutionsList: PropTypes.func.isRequired,
	hide: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	getInstitutionsList: getInstitutionsListAction,
};

export default connect(null, mapDispatchToProps)(AddNewInstitution);
