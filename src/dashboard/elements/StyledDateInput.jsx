import React from 'react';
import { Field } from 'formik';
import InputMask from 'react-input-mask';
import moment from 'moment';
import { get } from 'lodash';

import { Input } from 'elements';

const StyledDateInput = ({
	form,
	field,
}) => {
	console.log('props', form, field);

	const onChange = (e) => {
		const { value } = e.target;

		const group = value
			.match(/^(\d\d).(\d\d).(\d\d\d\d), (\d\d):(\d\d):(\d\d)$/, 'g');

		if (group) {
			const [day, month, year, hour, minute, second] = group.slice(1);
			const time = moment(`${year}-${month}-${day} ${hour}:${minute}:${second}`);

			if (time.format() !== 'Invalid date') {
				const [name, index] = field.name.split('.');

				const newValues = [...get(form, 'values.price', [])];
				newValues[index].date = time.toDate();

				form.setFieldValue(name, newValues);
			}
		} else {
			console.log('set error');
			// set(errors, [Fields.PRICE, index, 'date'], 'invalid date');
		}
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
