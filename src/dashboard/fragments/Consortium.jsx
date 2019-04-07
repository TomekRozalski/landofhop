import React from 'react';
import PropTypes from 'prop-types';
import { FastField } from 'formik';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Consortium = ({
	fieldName,
	formName,
	institutions,
	isError,
	isLoading,
}) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				inverse
				name={fieldName}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={StyledSelect}
				formName={formName}
				inverse
				isError={isError}
				isLoading={isLoading}
				name={fieldName}
			>
				{ institutions }
			</FastField>
		</InputWrapper>
	</>
);

Consortium.propTypes = {
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

export default connect(mapStateToProps)(Consortium);
