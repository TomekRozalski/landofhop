import React from 'react';
import styled from 'styled-components';

import {
	Alcohol,
	City,
	Country,
	Extract,
	Fermentation,
	Style,
} from './fragments';

const DefinitionList = styled.dl`
	grid-column: 3 / 5;
`;

const Header = () => (
	<DefinitionList>
		<Country />
		<City />
		<Fermentation />
		<Style />
		<Extract />
		<Alcohol />
		{/* <Filtered /> */}
		{/* <Pasteurized /> */}
	</DefinitionList>
);

export default Header;
