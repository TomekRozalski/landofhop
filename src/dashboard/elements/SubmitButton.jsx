import React from 'react';
import {
	bool,
	func,
	number,
	string,
} from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Button } from 'elements';

const Wrapper = styled.div`
	grid-column: ${({ column }) => `${column} / ${column + 1}`};
`;

const SubmitButton = ({ column, text, ...props }) => (
	<Wrapper column={column}>
		<Button {...props} wide submit>
			<FormattedMessage id={text || 'dashboard.addNew'} />
		</Button>
	</Wrapper>
);

SubmitButton.propTypes = {
	column: number,
	disabled: bool,
	isSubmitting: bool,
	onClick: func,
	text: string,
	type: string,
};

SubmitButton.defaultProps = {
	column: 4,
	disabled: false,
	isSubmitting: false,
	onClick: () => null,
	text: null,
	type: null,
};

export default SubmitButton;
