import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { colors, gutters, indexes } from 'utils/theme';

const SpinnerWrapper = styled.div`
	display: block;
	width: 100%;
	height: ${({ center }) => (center ? '100%' : `calc(100vh - ${gutters.headerHeight.lg}`)};
	background-color: ${colors.gray[700]};
	position: absolute;
	top: 0;
	left: 0;
	z-index: ${indexes.spinner};
`;

const CubesWrapper = styled.ul`
	width: 40px;
	height: 40px;
	position: absolute;
	left: 50%;
	z-index: ${indexes.spinner};
	${({ center }) => {
		if (center) {
			return (`
				top: 50%;
				transform: translate(-50%,-50%) rotateZ(45deg);
			`);
		}

		return (`
			top: 50px;
			transform: translateX(-50%) rotateZ(45deg);
		`);
	}}
`;

const animation = keyframes`
	0%, 10% {
		-webkit-transform: perspective(140px) rotateX(-180deg);
		transform: perspective(140px) rotateX(-180deg);
		opacity: 0;
	}
	25%, 75% {
		-webkit-transform: perspective(140px) rotateX(0deg);
		transform: perspective(140px) rotateX(0deg);
		opacity: 1;
	}
	90%, 100% {
		-webkit-transform: perspective(140px) rotateY(180deg);
		transform: perspective(140px) rotateY(180deg);
		opacity: 0;
	}
`;

const Cube = styled.li`
	float: left;
	width: 50%;
	height: 50%;
	position: relative;
	transform: scale(1.1) ${({ cubeRotate }) => (cubeRotate && `rotateZ(${cubeRotate}deg)`)};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${colors.gray[100]};
		animation: ${animation} 2.4s infinite linear both;
		transform-origin: 100% 100%;
		animation-delay: ${({ cubeDelay }) => (cubeDelay ? `${cubeDelay}s` : '0s')};
	}
`;

const Spinner = ({ center }) => (
	<SpinnerWrapper center={center}>
		<CubesWrapper center={center}>
			<Cube />
			<Cube cubeRotate="90" cubeDelay="0.3" />
			<Cube cubeRotate="270" cubeDelay="0.9" />
			<Cube cubeRotate="180" cubeDelay="0.6" />
		</CubesWrapper>
	</SpinnerWrapper>
);

Spinner.propTypes = {
	center: PropTypes.bool,
};

Spinner.defaultProps = {
	center: false,
};

export default Spinner;
