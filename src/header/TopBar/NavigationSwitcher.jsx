import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { NavigationContext } from 'config';
import { More } from 'elements/icons';
import { NavigationButton } from './elements';

const NavigationSwitcher = () => {
	const { navbar, setLoginbar, toggleNavbar } = useContext(NavigationContext);

	return (
		<NavigationButton onClick={() => { toggleNavbar(); setLoginbar(false); }}>
			<FormattedMessage id={`header.${navbar ? 'close' : 'open'}Navbar`}>
				{title => <More title={title} />}
			</FormattedMessage>
		</NavigationButton>
	);
};

export default NavigationSwitcher;
