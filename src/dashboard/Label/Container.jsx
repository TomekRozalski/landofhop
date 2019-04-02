import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
// import { assign } from 'lodash';

import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const Container = ({
	moveOn,
	// savedForms: {
	// 	[Forms.BEVERAGE_LABEL]: values,
	// },
	saveFormValues,
	showSubform,
	// update,
}) => (
	<Formik
		initialValues={initialFormValues}
		// initialValues={update
		// 	? values || assign({}, initialFormValues, update.label)
		// 	: values || initialFormValues
		// }
		// isInitialValid={update ? true : !!values}
		onSubmit={onSubmit({ moveOn, saveFormValues })}
		validationSchema={validationSchema}
		render={FormBody({ showSubform })}
	/>
);

Container.propTypes = {
	moveOn: PropTypes.func.isRequired,
	saveFormValues: PropTypes.func.isRequired,
	showSubform: PropTypes.func.isRequired,
};

export default Container;


// moveBack,
// moveOn,
// savedForms,
// saveFormValues,
// showSubform,
