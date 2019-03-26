import React from 'react';
import styled from 'styled-components';

import {
	Brand,
	Contract,
	Name,
} from './fragments';

const Wrapper = styled.div`
	grid-column: 3 / 5;
	margin: 3rem 0;
`;

const Header = () => (
	<Wrapper>
		<Contract />
		<Brand />
		<Name />

	</Wrapper>
);

export default Header;
