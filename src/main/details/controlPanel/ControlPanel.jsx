import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

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
`;

const Checkbox = styled.input.attrs({
	type: 'checkbox',
})`
	display: none;
`;

const Label = styled.label`
	::before,
	::after {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		border: 1px solid ${colors.gray[200]};
		content: '';
		position: absolute;
		top: .3rem;
		left: 0;
	}

	::after {
		background-color: ${({ type }) => colors.highlight[type]};
		visibility: hidden;
	}

	${Checkbox}:checked ~ &::after {
		visibility: visible;
	}
`;

const ControlPanel = () => (
	<Wrapper>
		<Navigation />
		<Example>
			<Checkbox
				id="control.producer"
				onChange={() => { console.log('aa'); }}
				// checked={false}
			/>
			<Label htmlFor="control.producer" type="producer">
				<FormattedMessage id="details.controlPanel.selectProducerData" />
			</Label>
		</Example>
		<Example>
			<Checkbox
				id="control.editorial"
				onChange={() => { console.log('aa'); }}
				// checked={false}
			/>
			<Label htmlFor="control.editorial" type="editorial">
				<FormattedMessage id="details.controlPanel.selectEditorialData" />
			</Label>
		</Example>
	</Wrapper>
);

export default ControlPanel;
