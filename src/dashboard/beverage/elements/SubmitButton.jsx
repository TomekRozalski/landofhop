import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Button } from 'elements';

const Wrapper = styled.div`
	grid-column: 4 / 5;
`;

const SubmitButton = ({ text, ...props }) => (
	<Wrapper>
		<Button {...props} wide submit>
			<FormattedMessage id={text || 'dashboard.addNew'} />
		</Button>
	</Wrapper>
);

SubmitButton.propTypes = {
	disabled: bool,
	isSubmitting: bool,
	onClick: func.isRequired,
	text: string,
	type: string,
};

SubmitButton.defaultProps = {
	disabled: false,
	isSubmitting: false,
	text: null,
	type: null,
};

export default SubmitButton;
