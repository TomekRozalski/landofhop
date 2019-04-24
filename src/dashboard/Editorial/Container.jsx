import React from 'react';
import { Formik } from 'formik';
import { assign } from 'lodash';

import { constants, ContainerTypes } from 'dashboard/utils';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const Container = ({
	moveBack,
	moveOn,
	savedForms: {
		[constants.forms.beverage.editorial]: values,
	},
	saveFormValues,
	showSubform,
	update,
}) => (
	<Formik
		initialValues={update
			? values || assign({}, initialFormValues, update.editorial)
			: values || initialFormValues
		}
		isInitialValid
		onSubmit={onSubmit({ moveBack, moveOn, saveFormValues })}
		validationSchema={validationSchema}
		render={FormBody({ showSubform })}
	/>
);

Container.propTypes = ContainerTypes.propTypes;
Container.defaultProps = ContainerTypes.defaultProps;

export default Container;
