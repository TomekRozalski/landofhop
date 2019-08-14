import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Button } from 'elements';

const Wrapper = styled.div`
	grid-column: 4 / 5;
`;

const ResetButton = props => (
	<Wrapper>
		<Button {...props} wide resign>
			<FormattedMessage id="dashboard.remove" />
		</Button>
	</Wrapper>
);

ResetButton.propTypes = {
	disabled: PropTypes.bool,
	isSubmitting: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

ResetButton.defaultProps = {
	disabled: false,
	isSubmitting: false,
};

export default ResetButton;
