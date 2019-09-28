import React, { useContext } from 'react';
import styled from 'styled-components';

import { AuthenticationContext } from 'config';
import { constants } from 'utils';
import Link from './Link';

const List = styled.ul`
	display: flex;
	padding: 5px 0;
	margin: 0 20px;
`;

const ListItem = styled.li`
	display: flex;
`;

const ListOfLinks = () => {
	const { isLoggedIn } = useContext(AuthenticationContext);

	return (
		<List>
			<ListItem><Link to={constants.routes.contact}>O stronie</Link></ListItem>
			<ListItem><Link to="/" disabled>Statystyki</Link></ListItem>
			{ isLoggedIn && <ListItem><Link to="/">Dodaj piwo</Link></ListItem>}
		</List>
	);
};

export default ListOfLinks;
