import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { NavigationContext } from 'config';
import { colors, sizes } from 'utils/theme';
import { Loupe } from 'elements/icons';

const Wrapper = styled.div`
	grid-area: search;
	display: flex;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: ${sizes.container.padding}px;
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

const SearchbarSwitcher = () => {
	const { searchbar, setSearchbar } = useContext(NavigationContext);

	return (
		<Wrapper>
			<Button onClick={setSearchbar}>
				<FormattedMessage id={`header.${searchbar ? 'close' : 'open'}Searchbar`}>
					{title => <Loupe title={title} />}
				</FormattedMessage>
			</Button>
		</Wrapper>
	);
};

export default SearchbarSwitcher;
