import React from 'react';
import styled from 'styled-components';

// import {
// 	Brand,
// 	Contract,
// 	Cooperation,
// 	Name,
// 	Series,
// } from './fragments';

const Wrapper = styled.div`
	grid-column: 4 / 5;
	background-color: green;
`;

const Verified = () => (
	<Wrapper>Verified Impressions</Wrapper>
);

export default Verified;
