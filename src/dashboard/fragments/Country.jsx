import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FastField } from 'formik';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { Label } from 'elements';
import { InputWrapper, LabelWrapper, StyledSelect } from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Country = ({
	countries,
	fieldName,
	formName,
	isError,
	isLoading,
}) => (
	<>
		<LabelWrapper>
			<Label htmlFor={`${formName}-${fieldName}`} required>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</Label>
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
				{ countries }
			</FastField>
		</InputWrapper>
	</>
);

Country.propTypes = {
	...fragmentTypes,
	countries: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
	isError: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	countries: get(state, 'dashboard.lists.countries.values', []),
	isError: get(state, 'dashboard.lists.countries.isError', false),
	isLoading: get(state, 'dashboard.lists.countries.isLoading', false),
});

export default connect(mapStateToProps)(Country);
