import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { get } from 'lodash';

import { Label } from 'elements';
import { colors, gutters } from 'utils/theme';
import { InputWrapper, LabelWrapper } from 'dashboard/elements';
import { Wrapper } from './StyledSwitch';

const CapWireFlipSwitch = ({
	field: {
		name,
		value,
	},
	form: {
		setFieldValue,
	},
}) => {
	const wire = 'hasCapWireFlip';

	const onChange = () => {
		setFieldValue(name, {
			...value,
			[wire]: !value[wire],
		});
	};

	return get(value, 'type.value') === 'bottle' ? (
		<>
			<LabelWrapper>
				<Label onClick={onChange}>
					<FormattedMessage id={`dashboard.${wire}`} />
				</Label>
			</LabelWrapper>
			<InputWrapper place="left">
				<Wrapper
					checked={value[wire] === true}
					disabled={value[wire] === null}
					width={gutters.inputHeight * 10 * 2}
					height={gutters.inputHeight * 10}
					onChange={onChange}
					offColor={colors.gray[200]}
					onColor={colors.success.strong}
				/>
			</InputWrapper>
		</>
	) : null;
};

CapWireFlipSwitch.propTypes = {
	field: PropTypes.shape({
		name: PropTypes.string.isRequired,
		value: PropTypes.shape({}),
	}).isRequired,
	form: PropTypes.shape({
		setFieldValue: PropTypes.func.isRequired,
	}).isRequired,
};

export default CapWireFlipSwitch;
