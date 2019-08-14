import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Button } from 'elements';

const Wrapper = styled.div`
	grid-column: 5 / 6;
`;

const SubmitButton = props => (
	<Wrapper>
		<Button {...props} wide submit>
			<FormattedMessage id="dashboard.addNew" />
		</Button>
	</Wrapper>
);

SubmitButton.propTypes = {
	disabled: bool,
	isSubmitting: bool,
	onClick: func.isRequired,
};

SubmitButton.defaultProps = {
	disabled: false,
	isSubmitting: false,
};

export default SubmitButton;
