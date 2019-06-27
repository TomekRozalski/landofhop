import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { fields } from '../utils';
import { InputGroup, StyledInput, StyledLabel } from './index';

const Email = ({ errors }) => (
	<InputGroup>
		<StyledLabel htmlFor={`login-${fields.email}`} required>
			<FormattedMessage id="loginbar.emailLabel" />
		</StyledLabel>
		<FastField
			component={StyledInput}
			error={errors[fields.email]}
			id={`login-${fields.email}`}
			inverse
			name={fields.email}
			type="email"
		/>
	</InputGroup>
);

Email.propTypes = {
	errors: PropTypes.shape({
		[fields.email]: PropTypes.string,
	}),
};

Email.defaultProps = {
	errors: {
		[fields.email]: null,
	},
};

export default Email;
