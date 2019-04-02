import React, { memo } from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'formik';

import { Input, Label } from 'elements';
import { InputWrapper, LabelWrapper } from 'dashboard/elements';
import { fields } from '../utils';

const Badge = ({ errors, formName }) => {
	console.log('Badge render');

	return (
		<>
			<LabelWrapper>
				<Label htmlFor={`${formName}-${fields.badge}`} required>
					<FormattedMessage id={`dashboard.${fields.badge}`} />
				</Label>
			</LabelWrapper>
			<InputWrapper place="wide">
				<Field
					component={Input}
					error={errors[fields.badge]}
					id={`${formName}-${fields.badge}`}
					name={fields.badge}
				/>
			</InputWrapper>
		</>
	);
};

Badge.propTypes = {
	errors: shape({
		[fields.badge]: string,
	}).isRequired,
	formName: string.isRequired,
};

export default memo(Badge);
