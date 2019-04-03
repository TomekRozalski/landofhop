import React from 'react';
import PropTypes from 'prop-types';
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
	disabled: PropTypes.bool,
	isSubmitting: PropTypes.bool,
	onClick: PropTypes.func,
	text: PropTypes.string,
	type: PropTypes.string,
};

SubmitButton.defaultProps = {
	disabled: false,
	isSubmitting: false,
	onClick: () => null,
	text: null,
	type: null,
};

export default SubmitButton;
