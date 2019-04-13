import React, { useState } from 'react';
// import InputMask from 'react-input-mask';
import moment from 'moment';
import { get, set } from 'lodash';

import { FieldStatusIndicator, Input } from 'elements';

const StyledDateInput = ({
	form,
	field,
	index,
}) => {
	const [data, setData] = useState(
		get(form, ['values', field.name], [])
			.map(({ date }) => moment(date).format('DD.MM.YYYY, HH:mm:ss'))
		|| [],
	);

	const onDatePickerChange = ({ target: { value } }) => {
		const newDates = [...data];
		newDates[index] = value;

		setData(newDates);

		const group = value
			.match(/^(\d\d).(\d\d).(\d\d\d\d), (\d\d):(\d\d):(\d\d)$/, 'g');

		if (group) {
			const [day, month, year, hour, minute, second] = group.slice(1);
			const time = moment(`${year}-${month}-${day} ${hour}:${minute}:${second}`);

			if (time.format() !== 'Invalid date') {
				const newValues = [...get(form, 'values.price', [])];
				newValues[index].date = time.toDate();

				form.setFieldValue(field.name, newValues);
			}
		} else {
			set(form.errors, [field.name, index, 'date'], 'invalid date');
		}
	};

	return (
		<FieldStatusIndicator
			// success={success}
			warning={get(form.errors, [field.name, index, 'date'])}
		>
			asd
			
{/* <InputMask
				// disabled={false}
				formatChars={{
					a: '[1-2]',
					b: '[0-1]',
					c: '[0-2]',
					d: '[0-3]',
					e: '[0-5]',
					f: '[0-9]',
				}}
				mask="df.bf.20af, cf:ef:ef"
				value={data[index]}
				onChange={onDatePickerChange}
			>
				{() => (<Input />)}
			</InputMask> */}
		</FieldStatusIndicator>
	);
};

export default StyledDateInput;
