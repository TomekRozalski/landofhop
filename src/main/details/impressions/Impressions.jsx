import React from 'react';
import styled from 'styled-components';

// import {
// 	Brand,
// 	Contract,
// 	Cooperation,
// 	Name,
// 	Series,
// } from './fragments';

const Provided = styled.div`
	grid-column: 3 / 4;
	background-color: tomato;
`;

const Verified = styled.div`
	grid-column: 4 / 5;
	background-color: green;
`;

const Impressions = () => (
	<>
		<Provided>Provided Impressions</Provided>
		<Verified>Verified Impressions</Verified>
	</>
);

export default Impressions;
