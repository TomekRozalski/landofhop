import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'formik';
import { get } from 'lodash';

import { fields } from '../utils';
import { InputGroup, StyledInput, StyledLabel } from './index';

const Password = ({ errors }) => (
	<InputGroup>
		<StyledLabel htmlFor={`login-${fields.password}`} required>
			<FormattedMessage id="loginbar.passwordLabel" />
		</StyledLabel>
		<Field
			component={StyledInput}
			error={get(errors, [fields.password])}
			id={`login-${fields.password}`}
			inverse
			name={fields.password}
			type="password"
		/>
	</InputGroup>
);

Password.propTypes = {
	errors: PropTypes.shape({
		[fields.password]: PropTypes.string,
	}),
};

Password.defaultProps = {
	errors: {
		[fields.password]: null,
	},
};

export default Password;
