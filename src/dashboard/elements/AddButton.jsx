import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Button } from 'elements';

const Wrapper = styled.div`
	grid-column: 5 / 6;
`;

const AddButton = ({ onClick }) => (
	<Wrapper>
		<Button onClick={onClick} secondary wide>
			<FormattedMessage id="dashboard.addNew" />
		</Button>
	</Wrapper>
);

AddButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default AddButton;
