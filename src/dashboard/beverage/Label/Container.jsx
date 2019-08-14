import React from 'react';
import { Formik } from 'formik';
import { assign } from 'lodash';

import { constants, ContainerTypes } from '../utils';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const Container = ({
	moveOn,
	savedForms: {
		[constants.forms.beverage.label]: values,
	},
	saveFormValues,
	showSubform,
	update,
}) => (
	<Formik
		initialValues={update
			? values || assign({}, initialFormValues, update.label)
			: values || initialFormValues
		}
		isInitialValid={update ? true : !!values}
		onSubmit={onSubmit({ moveOn, saveFormValues })}
		validationSchema={validationSchema}
		render={FormBody({ showSubform })}
	/>
);

Container.propTypes = ContainerTypes.propTypes;
Container.defaultProps = ContainerTypes.defaultProps;

export default Container;
