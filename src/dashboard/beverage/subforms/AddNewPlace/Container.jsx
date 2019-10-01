import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { AuthenticationContext, NotificationContext } from 'config';
import { getPlacesList as getPlacesListAction } from 'store/actions';
import { SecondaryForm } from '../../elements';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const AddNewPlace = ({ hide, getPlacesList, showSubform }) => {
	const { token } = useContext(AuthenticationContext);
	const { notify } = useContext(NotificationContext);

	return (
		<SecondaryForm>
			<Formik
				initialValues={initialFormValues}
				onSubmit={onSubmit({
					getPlacesList,
					hide,
					notify,
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

const mapDispatchToProps = {
	getPlacesList: getPlacesListAction,
};

export default connect(null, mapDispatchToProps)(AddNewPlace);
