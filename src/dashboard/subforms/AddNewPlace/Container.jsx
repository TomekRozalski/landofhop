import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppErrorContext, AuthenticationContext } from 'config';
import { getPlacesList as getPlacesListAction } from 'store/actions';
import { SecondaryForm } from 'dashboard/elements';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const AddNewPlace = ({ hide, getPlacesList, showSubform }) => {
	const { token } = useContext(AuthenticationContext);
	const { setAppError } = useContext(AppErrorContext);

	return (
		<SecondaryForm>
			<Formik
				initialValues={initialFormValues}
				onSubmit={onSubmit({
					getPlacesList,
					hide,
					setAppError,
					token,
				})}
				validationSchema={validationSchema}
				render={FormBody({ hide, showSubform })}
			/>
		</SecondaryForm>
	);
};

AddNewPlace.propTypes = {
	getPlacesList: PropTypes.func.isRequired,
	hide: PropTypes.func.isRequired,
	showSubform: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
	getPlacesList: getPlacesListAction,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddNewPlace);
