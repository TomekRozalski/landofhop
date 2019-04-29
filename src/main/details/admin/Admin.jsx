import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { BeverageDetailsContext } from 'config';
import { fonts } from 'utils/theme';

import { RemoveButton } from './fragments';

const Wrapper = styled.div`
	grid-column: 3 / 5;
	margin: 3rem 0;
	/* font: 500 3rem / 4rem ${fonts.primary}; */
	/* text-align: center; */
`;

const Admin = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const {
		badge,
		label: {
			general: {
				brand: {
					badge: brand,
				},
			},
		},
		shortId,
	} = beverage;

	return (
		<Wrapper>
			<p>{ moment(beverage.added).format('DD.MM.YYYY') }</p>
			<Link to={`/update-beverage/${shortId}/${brand}/${badge}`}>Update beverage</Link>
			<RemoveButton id={beverage.id} />
		</Wrapper>
	);
};

export default Admin;
