import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { AppErrorContext } from 'config';
import { getInstitutionsList as getInstitutionsListAction } from 'store/actions';
import { SecondaryForm } from '../../elements';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const AddNewInstitution = ({ hide, getInstitutionsList }) => {
	const { setAppError } = useContext(AppErrorContext);

	return (
		<SecondaryForm>
			<Formik
				initialValues={initialFormValues}
				onSubmit={onSubmit({
					getInstitutionsList,
					hide,
					setAppError,
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
