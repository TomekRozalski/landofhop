import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FastField, Field } from 'formik';
import { get } from 'lodash';

import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from '../elements';
import { fragmentTypes } from './utils';

const DryHopped = ({
	fieldName,
	formName,
	hops,
	isError,
	isLoading,
}) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={[]}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<Field
				component={StyledSelect}
				formName={formName}
				isError={isError}
				isLoading={isLoading}
				multi
				name={fieldName}
			>
				{ hops }
			</Field>
		</InputWrapper>
	</>
);

DryHopped.propTypes = {
	...fragmentTypes,
	hops: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
	isError: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
	const hops = get(state, 'dashboard.lists.ingredients.values', [])
		.filter(ingredient => ingredient.type === 'hop');

	return {
		hops,
		isError: get(state, 'dashboard.lists.ingredients.isError', false),
		isLoading: get(state, 'dashboard.lists.ingredients.isLoading', false),
	};
};

export default connect(mapStateToProps)(DryHopped);
