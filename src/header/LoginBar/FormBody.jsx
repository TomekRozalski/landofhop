import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { FastField, Form } from 'formik';
import { FormattedMessage } from 'react-intl';

import { Button, Input } from 'elements';
import { fonts, sizes } from 'utils/theme';

const LoginBarContainer = styled(Form)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${sizes.container.width}px;
	margin: 0 auto;
`;

const FieldWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
	max-width: 35rem;
	margin-right: 1rem;
`;

const Label = styled.label`
	margin-right: 1rem;
	font: 300 1.6rem / 1 ${fonts.primary};

	&::after {
		content: ':';
	}
`;

const FormBody = ({ isSubmitting, isValid }) => (
	<LoginBarContainer>
		<FieldWrapper>
			<Label htmlFor="login-email">
				<FormattedMessage id="loginbar.emailLabel" />
			</Label>
			<FastField
				component={Input}
				id="login-email"
				inverse
				name="email"
				type="email"
			/>
		</FieldWrapper>
		<FieldWrapper>
			<Label>
				<FormattedMessage id="loginbar.passwordLabel" />
			</Label>
			<FastField
				component={Input}
				inverse
				name="password"
				type="password"
			/>
		</FieldWrapper>
		<Button
			submit
			type="submit"
			disabled={!isValid}
			isSubmitting={isSubmitting}
		>
			<FormattedMessage id="loginbar.submit" />
		</Button>
	</LoginBarContainer>
);

FormBody.propTypes = {
	isSubmitting: bool.isRequired,
	isValid: bool.isRequired,
};

export default FormBody;
