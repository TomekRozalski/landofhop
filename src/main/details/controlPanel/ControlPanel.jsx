import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from 'utils/theme';
import { Navigation } from './fragments';

const Wrapper = styled.div`
	grid-column: 5 / 6;
	grid-row: 1 / -1;
`;

const Example = styled.div`
	margin-top: 1rem;
	font: 1.2rem / 1.8rem ${fonts.primary};
	color: ${colors.gray[200]};
	padding-left: 3rem;
	position: relative;

	::before {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		border: 1px solid ${colors.gray[200]};
		content: '';
		position: absolute;
		top: .3rem;
		left: 0;
	}
`;

const ControlPanel = () => (
	<Wrapper>
		<Navigation />
		<Example>
			zaznacz informacje pochodzące ze strony internetowej producenta


			
{' '}
		</Example>
		  <Example>
			zaznacz informacje pochodzące od redakcji Land of Hop


			
{' '}
    </Example>
	</Wrapper>
);

export default ControlPanel;
