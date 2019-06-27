import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

import { AuthenticationContext } from 'config';
import {
	colors,
	gutters,
	indexes,
	mq,
} from 'utils/theme';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const Wrapper = styled.div`
	display: block;
	width: 100%;
	background-color: ${colors.gray[600]};
	
	z-index: ${indexes.loginbar};
`;

const LoginbarContainer = styled.div`
	height: ${gutters.loginbarHeight.sm}px;

	${mq.md`
		display: flex;
		justify-content: center;
		align-items: center;
		height: ${gutters.loginbarHeight.md}px;
	`}

	${mq.lg`
		height: ${gutters.loginbarHeight.lg}px;
	`}
`;

const Loginbar = () => {
	const { logIn } = useContext(AuthenticationContext);

	return (
		<Wrapper>
			<LoginbarContainer>
				<Formik
					initialValues={initialFormValues}
					onSubmit={onSubmit(logIn)}
					validationSchema={validationSchema}
					render={FormBody}
				/>
			</LoginbarContainer>
		</Wrapper>
	);
};

export default Loginbar;
