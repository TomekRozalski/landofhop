import React from 'react';
import styled from 'styled-components';

import {
	Barcode,
	Container,
	ExpirationDate,
	Ingredients,
	Price,
	SmokedMalt,
	Temperature,
} from './fragments';

const DefinitionList = styled.dl`
	grid-column: 3 / 5;
`;

const Secondary = () => (
	<DefinitionList>
		<Ingredients />
		<SmokedMalt />
		<Temperature />
		<ExpirationDate />
		<Container />
		<Barcode />
		<Price />
	</DefinitionList>
);

export default Secondary;
