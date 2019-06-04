import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'utils/theme';


const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 35px;
	margin-bottom: 2rem;
	border: 4px solid ${colors.success.strong};
	cursor: pointer;
`;

const StyledLink = styled(Wrapper)``;

const Arrow = styled.div`
    width: 100%;
    height: 100%;
	background: ${colors.success.strong};

	clip-path: polygon(${({ type }) => {
		if (type === 'previous') {
			return '40% 25%, 40% 40%, 90% 40%, 90% 60%, 40% 60%, 40% 75%, 10% 50%';
		}

		if (type === 'next') {
			return '10% 40%, 60% 40%, 60% 25%, 90% 51%, 60% 75%, 60% 60%, 10% 60%';
		}

		return '';
	}});

	::before {
		display: block;
		width: 100%;
		height: 100%;
		content: '';
	}
`;

const StyledButton = ({ children, to, type }) => (
	to ? (
		<StyledLink as={Link} to={to}>
			<Arrow type={type}>{ children }</Arrow>
		</StyledLink>
	) : (
		<Wrapper>
			<Arrow type={type}>{ children }</Arrow>
		</Wrapper>
	)
);

StyledButton.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string,
	type: PropTypes.oneOf(['previous', 'next']).isRequired,
};

StyledButton.defaultProps = {
	to: null,
};

export default StyledButton;
