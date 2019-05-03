import React from 'react';
import styled from 'styled-components';

import {
	Country,
} from './fragments';

const DefinitionList = styled.dl`
	grid-column: 3 / 5;
	margin: 3rem 0;
`;

const Header = () => (
	<DefinitionList>
		<Country />


		{/* <DL>
			<Country />
			<City />
			<Fermentation />
			<Style />
			<Extract />
			<Alcohol />
			<Filtered />
			<Pasteurized />
		</DL> */}
	</DefinitionList>
);

export default Header;
