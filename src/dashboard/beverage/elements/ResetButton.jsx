import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Button } from 'elements';

const Wrapper = styled.div`
	grid-column: 3 / 4;
`;

const ResetButton = ({ text, type, ...rest }) => {
	let message = 'dashboard.resign';
	if (type === 'reset') { message = 'dashboard.resetTheForm'; }
	if (text) { message = text; }

	return (
		<Wrapper>
			<Button {...rest} type={type} wide resign>
				<FormattedMessage id={message} />
			</Button>
		</Wrapper>
	);
};

ResetButton.propTypes = {
	disabled: PropTypes.bool,
	isSubmitting: PropTypes.bool,
	onClick: PropTypes.func,
	text: PropTypes.string,
	type: PropTypes.string,
};

ResetButton.defaultProps = {
	disabled: false,
	isSubmitting: false,
	onClick: () => null,
	text: null,
	type: null,
};

export default ResetButton;
