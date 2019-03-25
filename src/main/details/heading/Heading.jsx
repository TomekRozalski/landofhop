import React, { useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { BeverageDetailsContext } from 'config';
import { fonts } from 'utils/theme';

import { Name } from './fragments';

const Wrapper = styled.div`
	grid-column: 3 / 5;
	margin: 3rem 0;
	/* font: 500 3rem / 4rem ${fonts.primary}; */
	/* text-align: center; */
`;

const Header = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	return (
		<Wrapper>
			<Name />
			<time>{ moment(beverage.added).format('DD.MM.YYYY') }</time>
		</Wrapper>
	);
};

export default Header;
