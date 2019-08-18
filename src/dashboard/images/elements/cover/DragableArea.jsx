import styled from 'styled-components';

import { colors } from 'utils/theme';

const DragableArea = styled.section`
	grid-column: 1 / 2;
	margin: 2rem 0 1rem 0;
	width: 220px;
	height: 500px;
	padding: .5rem;
	background-color: ${colors.gray[100]};
	transition: background-color .2s;
	cursor: pointer;
	position: relative;

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

export default DragableArea;
