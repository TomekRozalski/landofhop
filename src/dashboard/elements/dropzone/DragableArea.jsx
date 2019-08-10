import styled from 'styled-components';

import { colors } from 'utils/theme';

const DragableArea = styled.section`
	grid-column: 1 / -1;
	min-height: 30rem;
	border: .5rem solid ${colors.gray[600]};
	transition: border .2s;
	padding: .5rem;
	cursor: pointer;
	position: relative;

	::before {
		display: block;
		width: 250px;
		height: 250px;
		content: '';
		background-color: ${colors.gray[700]};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	::after {
		display: block;
		width: 100%;
		height: 100%;
		content: '';
		background-color: rgba(255, 255, 255, .4);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}

	:hover,
	:focus {
		outline: none;
		border-color: ${colors.gray[400]};

		svg .dark {
			fill: ${colors.gray[400]};
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
			fill: ${colors.gray[600]};
			transition: fill .2s;
		}

		.movable {
			transform: translate(${({ isDragActive }) => (isDragActive ? '224px, -104px' : '0, 0')});
			transition: transform .2s;
		}
	}
`;

export default DragableArea;
