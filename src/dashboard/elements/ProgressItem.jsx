import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from 'utils/theme';
import { Checkmark } from 'elements/icons';
import { Label, Producer, Editorial } from 'dashboard/elements/icons';

const Button = styled.button.attrs({
	type: 'button',
})`
	display: block;
	width: 100%;
	height: 8rem;
	cursor: ${({ isActive, isCompleted }) => {
		if (isActive) { return 'crosshair'; }
		if (isCompleted) { return 'pointer'; }
		return 'not-allowed';
	}};
	position: relative;

	&:focus {
		outline: none;
	}

	svg { width: 8rem; }
`;

const CheckmarkWrapper = styled.div`
	position: absolute;
	left: 51%;
	top: 51%;
	transform: translate(-50%, -50%);

	svg {
		height: 3rem;
	}
`;

const ProgressItem = ({
	completed,
	moveTo,
	order,
	step,
}) => {
	let Icon;

	switch (order) {
	case 1:
		Icon = Label;
		break;
	case 2:
		Icon = Producer;
		break;
	default:
	case 3:
		Icon = Editorial;
		break;
	}

	const isActive = step === order;
	const actualColor = isActive ? colors.gray[100] : undefined;

	return (
		<Button
			isActive={isActive}
			isCompleted={completed}
			onClick={() => (completed ? moveTo(order) : null)}
		>
			<Icon color={actualColor} />
			{
				completed && !isActive && (
					<CheckmarkWrapper>
						<Checkmark success />
					</CheckmarkWrapper>
				)
			}
		</Button>
	);
};

ProgressItem.propTypes = {
	completed: PropTypes.bool.isRequired,
	moveTo: PropTypes.func.isRequired,
	order: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired,
};

export default ProgressItem;
