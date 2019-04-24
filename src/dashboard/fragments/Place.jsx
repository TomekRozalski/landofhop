import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FastField } from 'formik';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Place = ({
	fieldName,
	formName,
	isError,
	isLoading,
	places,
}) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset=""
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={StyledSelect}
				formName={formName}
				isError={isError}
				isLoading={isLoading}
				name={fieldName}
			>
				{ places }
			</FastField>
		</InputWrapper>
	</>
);

Place.propTypes = {
	...fragmentTypes,
	isError: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	places: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
};

const mapStateToProps = state => ({
	places: get(state, 'dashboard.lists.places.values', []),
	isError: get(state, 'dashboard.lists.places.isError', false),
	isLoading: get(state, 'dashboard.lists.places.isLoading', false),
});

export default connect(mapStateToProps)(Place);
