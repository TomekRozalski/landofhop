import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Switch from 'react-switch';

import { colors, gutters } from 'utils/theme';

const Wrapper = styled(Switch)`
	.react-switch-bg,
	.react-switch-handle {
		border-radius: 0 !important;
	}
`;

const StyledSwitch = ({
	field: {
		name,
		value,
	},
	form: {
		setFieldValue,
	},
}) => {
	const onChange = (e) => {
		setFieldValue(name, e);
	};

	return (
		<Wrapper
			checked={value === true}
			disabled={value === null}
			width={gutters.inputHeight * 10 * 2}
			height={gutters.inputHeight * 10}
			onChange={onChange}
			offColor={colors.gray[200]}
			onColor={colors.success.strong}
		/>
	);
};

StyledSwitch.propTypes = {
	field: PropTypes.shape({
		name: PropTypes.string.isRequired,
		value: PropTypes.bool,
	}).isRequired,
	form: PropTypes.shape({
		setFieldValue: PropTypes.func.isRequired,
	}).isRequired,
};

export default StyledSwitch;
