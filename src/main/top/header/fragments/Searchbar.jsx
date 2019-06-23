import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { NavigationContext } from 'config';
import { colors, sizes } from 'utils/theme';
import { Loupe } from 'elements/icons';

const Button = styled.button`
	grid-area: search;
	display: flex;
    justify-content: center;
	padding: ${sizes.container.padding.lg};
	background: ${colors.gray[100]};
	cursor: pointer;

	&:focus {
		outline: none;
	}

	svg {
		display: block;
		width: 30px;
		height: 30px;
		opacity: 1;
		transition: opacity .2s;
	}

	&:hover svg {
		opacity: .5;
	}
`;

const Searchbar = () => {
	const { searchbar, setSearchbar } = useContext(NavigationContext);

	return (
		<Button onClick={setSearchbar}>
			<Loupe title="yhm" />
			{/* <FormattedMessage id={`header.${navbar ? 'close' : 'open'}Navbar`}>
				{title => <More title={title} />}
			</FormattedMessage> */}
		</Button>
	);
};

export default Searchbar;
