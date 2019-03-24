import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { indexes } from 'utils/theme';
import {
	Checkmark,
	Danger,
	Loupe,
	Warning,
} from 'elements/icons';

const Wrapper = styled.div`
	display: block;
	width: 100%;
	position: relative;
`;

const Icon = css`
	display: inline-block;
	position: absolute;
	top: 18px;
	transform: translateY(-50%);
	pointer-events: none;
	z-index: ${indexes.statusIcon};
`;

const DangerWrapper = styled.div`
	svg {
		width: 14px;
		height: 14px;
		${Icon}
		top: 10px;
		right: 6px;
	}
`;

const LoupeWrapper = styled.div`
	svg {
		width: 14px;
		height: 15px;
		right: 6px;
		${Icon}
	}
`;

const CheckmarkWrapper = styled.div`
	svg {
		width: 14px;
		height: 11px;
		right: 6px;
		${Icon}
	}
`;

const WarningWrapper = styled.div`
	svg {
		width: 14px;
		height: 13px;
		right: ${({ select }) => (select ? 50 : 7)}px;
		${Icon}
	}
`;

const FieldStatusIndicator = ({
	children,
	danger,
	search,
	select,
	success,
	warning,
}) => (
	<Wrapper>
		{ danger && (
			<DangerWrapper>
				<Danger />
			</DangerWrapper>
		)}
		{ search && (
			<LoupeWrapper>
				<Loupe />
			</LoupeWrapper>
		)}
		{ success && (
			<CheckmarkWrapper>
				<Checkmark success />
			</CheckmarkWrapper>
		)}
		{ warning && (
			<WarningWrapper select={select}>
				<Warning />
			</WarningWrapper>
		)}
		{ children }
	</Wrapper>
);

FieldStatusIndicator.propTypes = {
	children: PropTypes.node.isRequired,
	danger: PropTypes.bool,
	search: PropTypes.bool,
	select: PropTypes.bool,
	success: PropTypes.bool,
	warning: PropTypes.bool,
};

FieldStatusIndicator.defaultProps = {
	danger: false,
	search: false,
	select: false,
	success: false,
	warning: false,
};

export default FieldStatusIndicator;
