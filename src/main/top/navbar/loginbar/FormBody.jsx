import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
	Email,
	Password,
	StyledButton,
	StyledForm,
} from './fragments';

const FormBody = (props) => {
	const { isSubmitting, isValid } = props;

	return (
		<StyledForm>
			<Email {...props} />
			<Password {...props} />
			<StyledButton
				type="submit"
				disabled={!isValid}
				isSubmitting={isSubmitting}
			>
				<FormattedMessage id="loginbar.submit" />
			</StyledButton>
		</StyledForm>
	);
};

FormBody.propTypes = {
	isSubmitting: PropTypes.bool.isRequired,
	isValid: PropTypes.bool.isRequired,
};

export default FormBody;
