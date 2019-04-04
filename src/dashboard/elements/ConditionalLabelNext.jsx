import React from 'react';

const ConditionalLabelNext = (props) => {
	console.log('ConditionalLabelNext props', props);

	const setValue = (e) => {
		console.log('newValue', e.target.checked);

		if (e.target.checked) {
			props.form.setFieldValue(props.field.name, false);
		} else {
			props.form.setFieldValue(props.field.name, []);
		}
	};

	return (
		<input
			type="checkbox"
			onClick={setValue}
		/>
	);
};

export default ConditionalLabelNext;
