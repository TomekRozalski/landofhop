import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { AuthenticationContext } from 'config';
import { constants } from 'utils';
import { ButtonsWrapper } from './elements';
import { Link } from './index';

const Item = styled.li`
	display: flex;
`;

const ListOfLinks = () => {
	const { isLoggedIn } = useContext(AuthenticationContext);

	return (
		<ButtonsWrapper as="ul">
			<Item>
				<Link to={constants.routes.contact}>
					<FormattedMessage id="navbar.aboutName" />
				</Link>
			</Item>
			<Item>
				<Link to="/" disabled>
					<FormattedMessage id="navbar.stats" />
				</Link>
			</Item>
			{ isLoggedIn && (
				<Item>
					<Link to={constants.routes.addNewBeverage}>
						<FormattedMessage id="navbar.addNewBeverage" />
					</Link>
				</Item>
			)}
		</ButtonsWrapper>
	);
};

export default ListOfLinks;
