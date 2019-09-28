import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { NavigationContext } from 'config';
import { colors, sizes } from 'utils/theme';
import { More } from 'elements/icons';

const Button = styled.button`
	grid-area: more;
	display: flex;
    justify-content: center;
	align-items: center;
	padding: ${sizes.container.padding}px;
	background: ${colors.gray[100]};
	cursor: pointer;

	&:focus {
		outline: none;
	}

	svg {
		display: block;
		width: 40px;
		height: 8px;
		opacity: 1;
		transition: opacity .2s;
	}

	&:hover svg {
		opacity: .5;
	}
`;

const NavigationSwitcher = () => {
	const { navbar, toggleNavbar } = useContext(NavigationContext);

	return (
		<Button onClick={toggleNavbar}>
			<FormattedMessage id={`header.${navbar ? 'close' : 'open'}Navbar`}>
				{title => <More title={title} />}
			</FormattedMessage>
		</Button>
	);
};

export default NavigationSwitcher;
