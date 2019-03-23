import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import { NavigationContext } from 'config';
import { mq } from 'utils/theme';
import { KebabMenu } from 'elements/icons';

const Wrapper = styled.div`
	order: 3;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	${mq.md`
		grid-column: 5 / 6;
		grid-row: 1;
	`}
`;

const Button = styled.div.attrs({
	role: 'button',
})`
	display: inline-block;
	width: 49px;
	height: 80px;
	padding: 20px;
	overflow: hidden;
	cursor: pointer;
	
	svg {
		display: block;
		width: 9px;
		height: 40px;
		opacity: 1;
		transition: opacity .2s;
	}

	&:hover svg {
		opacity: .5;
	}
`;

const NavigationSwitcher = ({ intl }) => {
	const { navbar, toggleNavbar } = useContext(NavigationContext);

	return (
		<Wrapper>
			<Button
				onClick={toggleNavbar}
				data-testid="navigation-switcher"
			>
				<KebabMenu
					title={
						intl.formatMessage({
							id: `header.${navbar ? 'close' : 'open'}Navbar`,
						})
					}
				/>
			</Button>
		</Wrapper>
	);
};

NavigationSwitcher.propTypes = {
	intl: PropTypes.shape({
		formatMessage: PropTypes.func.isRequired,
	}).isRequired,
};

export default injectIntl(NavigationSwitcher);
