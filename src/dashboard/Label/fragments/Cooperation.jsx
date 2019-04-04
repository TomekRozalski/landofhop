import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FastField } from 'formik';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';


import {
	ConditionalLabel,
	ConditionalLabelNext,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from 'dashboard/elements';
import { fields, fragmentTypes, initialFormValues } from '../utils';


const Cooperation = (props) => {
	const {
		formName,
		institutions,
		isError,
		isLoading,
	} = props;

	console.log('props', props);

	// const onCheckboxChange = (e) => {
	// 	if (!e.target.checked) {
	// 		setFieldValue(fields.cooperation, initialFormValues[fields.cooperation]);
	// 	}

	// 	handleChange(e);
	// };

	return (
		<>
			<LabelWrapper>
				<FastField
					component={ConditionalLabelNext}
					name={fields.cooperation}
				/>

				{/* <ConditionalLabel
					// checked={values[fields.isCooperation]}
					conditional={fields.isCooperation}
					formName={formName}
					// onChange={onCheckboxChange}
				>
					<FormattedMessage id={`dashboard.${fields.cooperation}`} />
				</ConditionalLabel> */}
			</LabelWrapper>
			<InputWrapper place="wide">
				<FastField
					component={StyledSelect}
					// disable={values[fields.isCooperation] === false}
					formName={formName}
					isError={isError}
					isLoading={isLoading}
					multi
					name={fields.cooperation}
				>
					{ institutions }
				</FastField>
			</InputWrapper>
		</>
	);
};

Cooperation.propTypes = {
	...fragmentTypes,
	institutions: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
	isError: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	institutions: get(state, 'dashboard.lists.institutions.values', []),
	isError: get(state, 'dashboard.lists.institutions.isError', false),
	isLoading: get(state, 'dashboard.lists.institutions.isLoading', false),
});

export default connect(mapStateToProps)(Cooperation);
