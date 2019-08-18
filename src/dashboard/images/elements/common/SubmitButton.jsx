import React from 'react';
import { bool, func, number } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Button } from 'elements';

const Wrapper = styled.div`
	grid-column: ${({ position }) => `${position} / ${position + 1}`};
`;

const SubmitButton = ({ position, ...props }) => (
	<Wrapper position={position}>
		<Button {...props} wide submit>
			<FormattedMessage id="dashboard.addNew" />
		</Button>
	</Wrapper>
);

SubmitButton.propTypes = {
	disabled: bool,
	isSubmitting: bool,
	onClick: func.isRequired,
	position: number,
};

SubmitButton.defaultProps = {
	disabled: false,
	isSubmitting: false,
	position: 5,
};

export default SubmitButton;
