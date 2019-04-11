import React from 'react';
import { Field } from 'formik';
import InputMask from 'react-input-mask';
import moment from 'moment';

import { Input } from 'elements';

const StyledDateInput = ({
	form,
	field,
}) => {
	console.log('props', form, field);

	const onChange = (e) => {
		console.log('change', e.target.value);
	};

	return (
		<InputMask
			disabled={false}
			formatChars={{
				a: '[1-2]',
				b: '[0-1]',
				c: '[0-2]',
				d: '[0-3]',
				e: '[0-5]',
				f: '[0-9]',
			}}
			mask="df.bf.20af, cf:ef:ef"
			value={moment(field.value).format('DD.MM.YYYY, HH:mm:ss')}
			onChange={onChange}
		>
			{inputProps => (
				<Field
					{...inputProps}
					component={Input}
					disabled={false}
					// error={error}
					name={field.name}
				/>
			)}
		</InputMask>
	);
};

export default StyledDateInput;
