import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { assign } from 'lodash';

import { constants } from 'dashboard/utils';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const Container = ({
	moveBack,
	moveOn,
	savedForms: {
		[constants.forms.beverage.producer]: values,
	},
	saveFormValues,
	showSubform,
	update,
}) => (
	<Formik
		initialValues={update
			? values || assign({}, initialFormValues, update.producer)
			: values || initialFormValues
		}
		isInitialValid
		onSubmit={onSubmit({ moveBack, moveOn, saveFormValues })}
		validationSchema={validationSchema}
		render={FormBody({ showSubform })}
	/>
);

Container.propTypes = {
	moveBack: PropTypes.func.isRequired,
	moveOn: PropTypes.func.isRequired,
	savedForms: PropTypes.shape({}),
	saveFormValues: PropTypes.func.isRequired,
	showSubform: PropTypes.func.isRequired,
	update: PropTypes.shape({}),
};

Container.defaultProps = {
	savedForms: {},
	update: null,
};

export default Container;
