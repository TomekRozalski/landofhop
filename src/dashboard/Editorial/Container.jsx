import React from 'react';
import { Formik } from 'formik';
import { assign } from 'lodash';

import { constants, convertDateToString, ContainerTypes } from 'dashboard/utils';
import {
	fields,
	initialFormValues,
	onSubmit,
	validationSchema,
} from './utils';
import FormBody from './FormBody';

const Container = ({
	finalSubmit,
	moveBack,
	savedForms: {
		[constants.forms.beverage.editorial]: values,
	},
	saveFormValues,
	showSubform,
	update,
}) => (
	<Formik
		initialValues={update
			? values || assign(
				{},
				initialFormValues,
				update.editorial,
				{
					[fields.updated]: convertDateToString(new Date()),
				},
			)
			: values || initialFormValues
		}
		isInitialValid
		onSubmit={onSubmit({ finalSubmit, moveBack, saveFormValues })}
		validationSchema={validationSchema}
		render={FormBody({ showSubform })}
	/>
);

Container.propTypes = ContainerTypes.propTypes;
Container.defaultProps = ContainerTypes.defaultProps;

export default Container;
