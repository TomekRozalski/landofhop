import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import { fonts } from 'utils/theme';

const Wrapper = styled.div`
	grid-column: 3 / -1;
	margin: 3rem 0;
	/* font: 500 3rem / 4rem ${fonts.primary}; */
	/* text-align: center; */
`;

const Header = ({ beverage }) => {
	console.log('beverage', beverage);

	return beverage ? (
		<Wrapper>
			<p>{ beverage.label.general.name[0].value }</p>
			<time>{ moment(beverage.added).format('DD.MM.YYYY') }</time>
		</Wrapper>
	) : null;
};

Header.propTypes = {
	beverage: PropTypes.shape({

	}).isRequired,
};

export default Header;
