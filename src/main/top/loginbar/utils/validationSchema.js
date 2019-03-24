import * as Yup from 'yup';

import fields from './fields';

export default Yup.object().shape({
	[fields.email]: Yup.string()
		.email('formError.invalidEmail')
		.required('formError.required'),
	[fields.password]: Yup.string()
		.min(2, 'formError.tooShort')
		.max(50, 'formError.tooLong')
		.required('formError.required'),
});
