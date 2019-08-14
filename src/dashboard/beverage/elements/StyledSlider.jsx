import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSlider from 'react-slider';

import { colors } from 'utils/theme';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 3.4rem;
`;

const SliderHandler = styled.div`
	display: inline-block;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${colors.success.strong};
	transform: translateX(-10px);
	cursor: ew-resize;
`;

const StyledSlider = ({ field, form }) => {
	const onChange = (value) => {
		form.setFieldValue(field.name, value);
	};

	return (
		<Wrapper>
			<ReactSlider
				disabled={field.value === null}
				onAfterChange={onChange}
				withBars
				value={Number(field.value)}
			>
				<SliderHandler />
			</ReactSlider>
		</Wrapper>
	);
};

StyledSlider.propTypes = {
	field: PropTypes.shape({
		value: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		]),
	}).isRequired,
	form: PropTypes.shape({
		setFieldValue: PropTypes.func.isRequired,
	}).isRequired,
};

export default StyledSlider;
