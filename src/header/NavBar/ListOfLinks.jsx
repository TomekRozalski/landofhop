import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { AuthenticationContext } from 'config';
import { constants } from 'utils';
import { ButtonsWrapper, Link } from './index';

const ListOfLinks = () => {
	const { isLoggedIn } = useContext(AuthenticationContext);

	return (
		<ButtonsWrapper as="ul">
			<li>
				<Link to={constants.routes.contact}>
					<FormattedMessage id="navbar.aboutName" />
				</Link>
			</li>
			<li>
				<Link to="/" disabled>
					<FormattedMessage id="navbar.stats" />
				</Link>
			</li>
			{ isLoggedIn && (
				<li>
					<Link to="/">
						<FormattedMessage id="navbar.addNewBeverage" />
					</Link>
				</li>
			)}
		</ButtonsWrapper>
	);
};

export default ListOfLinks;
