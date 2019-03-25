import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import { fonts } from 'utils/theme';
import { beverageDetails } from 'main/details/utils';
import { RemoveButton } from './fragments';

const Wrapper = styled.div`
	grid-column: 3 / 5;
	margin: 3rem 0;
	/* font: 500 3rem / 4rem ${fonts.primary}; */
	/* text-align: center; */
`;

const Admin = ({ beverage }) => {
	console.log('beverage', beverage);

	return (
		<Wrapper>
			{/* <Link to={`/update-beverage/${params.short_id}/${params.brand}/${params.badge}`}>Update beverage</Link> */}
			<RemoveButton id={beverage.id} />
		</Wrapper>
	);
};

Admin.propTypes = {
	beverage: beverageDetails.isRequired,
};

export default Admin;
