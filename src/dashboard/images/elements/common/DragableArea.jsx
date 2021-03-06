import React from 'react';
import {
	func,
	node,
	number,
	shape,
	string,
} from 'prop-types';
import styled from 'styled-components';

import { colors } from 'utils/theme';
import { setCoverHeight } from 'utils';
import { DragAndDrop } from '../icons';

const Area = styled.section`
	display: flex;
	align-items: flex-end;
	margin: 2rem 0;
	width: 100%;
	min-height: ${({ height }) => (height || 220)}px;
	${({ type }) => (type === 'gallery' && 'padding: .5rem;')}
	background-color: ${colors.gray[600]};
	cursor: pointer;
	position: relative;

	::after {
		display: block;
		width: 100%;
		height: 100%;
		content: '';
		background-color: rgba(255, 255, 255, .5);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}

	:hover,
	:focus {
		outline: none;
		border-color: ${colors.gray[400]};

		svg {
			.dark {
				fill: ${colors.gray[400]};
			}

			.movable {
				transform: translate(224px, -104px);
			}
		}
	}

	svg {
		height: 140px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;

		.dark {
			fill: ${colors.gray[400]};
			transition: fill .2s;
		}

		.movable {
			transition: transform .2s;
		}
	}
`;

const DragableArea = ({
	children,
	container,
	getInputProps,
	getRootProps,
	type,
}) => (
	<Area {...getRootProps()} height={container && setCoverHeight({ container })} type={type}>
		<input {...getInputProps()} />
		<DragAndDrop />
		{ children }
	</Area>
);

DragableArea.propTypes = {
	children: node,
	container: shape({
		type: string.isRequired,
		unit: string.isRequired,
		value: number.isRequired,
	}),
	getInputProps: func.isRequired,
	getRootProps: func.isRequired,
	type: string,
};

DragableArea.defaultProps = {
	children: null,
	container: null,
	type: null,
};

export default DragableArea;
