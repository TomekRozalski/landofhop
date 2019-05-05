import React from 'react';
import styled from 'styled-components';

import {
	Brand,
	Contract,
	Cooperation,
	Name,
	Series,
} from './fragments';

const Wrapper = styled.div`
	grid-column: 3 / 5;
`;

const Header = () => (
	<Wrapper>
		<Cooperation />
		<Contract />
		<Brand />
		<Series />
		<Name />
	</Wrapper>
);

export default Header;
