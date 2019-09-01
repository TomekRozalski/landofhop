import React, { useContext } from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { get, isDate } from 'lodash';

import { constants } from 'utils';
import { AuthenticationContext, BeverageDetailsContext } from 'config';
import { RemoveButton, UpdateButton } from './fragments';

const Wrapper = styled.div`
	grid-column: 3 / 6;
	display: flex;
	padding-top: 1rem;
`;

const Notes = styled.div`
	grid-column: 3 / 5;
	display: flex;
	padding-top: 1rem;
`;

const Admin = ({ params }) => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { token, tokenExpiration } = useContext(AuthenticationContext);
	const { badge, brand, shortId } = params;

	return (token && isDate(tokenExpiration)) ? (
		<>
			<Wrapper>
				<UpdateButton
					to={`${constants.routes.updateBeverage}/${shortId}/${brand}/${badge}`}
					text="details.admin.updateBeverage"
				/>
				<UpdateButton
					to={`${constants.routes.updateBeverageImages}/${shortId}/${brand}/${badge}`}
					text="details.admin.updateBeverageImages"
				/>
				<RemoveButton files={get(beverage, 'editorial.images')} id={beverage.id} params={params} />
			</Wrapper>
			<Notes>
				{ get(beverage, 'editorial.notes') }
			</Notes>
		</>
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
