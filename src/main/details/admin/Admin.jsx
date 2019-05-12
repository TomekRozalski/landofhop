import React, { useContext } from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { isDate } from 'lodash';

import { AuthenticationContext, BeverageDetailsContext } from 'config';
import { RemoveButton, UpdateButton } from './fragments';

const Wrapper = styled.div`
	grid-column: 3 / 5;
	display: flex;
	padding-top: 1rem;
`;

const Admin = ({ params }) => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { token, tokenExpiration } = useContext(AuthenticationContext);
	const { badge, brand, shortId } = params;

	return (token && isDate(tokenExpiration)) ? (
		<Wrapper>
			<UpdateButton to={`/update-beverage/${shortId}/${brand}/${badge}`} />
			<RemoveButton id={beverage.id} />
		</Wrapper>
	) : null;
};

Admin.propTypes = {
	params: shape({
		badge: string.isRequired,
		brand: string.isRequired,
		shortId: string.isRequired,
	}).isRequired,
};

export default Admin;
