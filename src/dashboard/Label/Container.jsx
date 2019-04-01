import React from 'react';
import { Formik } from 'formik';
// import { assign } from 'lodash';

// import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const Container = ({
	// moveOn,
	// savedForms: {
	// 	[Forms.BEVERAGE_LABEL]: values,
	// },
	// saveFormValues,
	showSubform,
	// update,
}) => (
	<Formik
		// initialValues={update
		// 	? values || assign({}, initialFormValues, update.label)
		// 	: values || initialFormValues
		// }
		// isInitialValid={update ? true : !!values}
		// onSubmit={onSubmit({ moveOn, saveFormValues })}
		onSubmit={() => { console.log('submit'); }}
		// validationSchema={validationSchema}
		render={FormBody({ showSubform })}

		// render={() => (
		// 	<div>abd</div>
		// )}
	/>
);

export default Container;


// moveBack,
// moveOn,
// savedForms,
// saveFormValues,
// showSubform,
