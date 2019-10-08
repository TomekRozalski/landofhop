import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { NavigationContext } from 'config';
import { Loupe } from 'elements/icons';
import { SearchbarButton } from './elements';

const Wrapper = styled.div`
	grid-area: search;
	display: flex;
`;

const SearchbarSwitcher = () => {
	const { searchbar, setSearchbar } = useContext(NavigationContext);

	return (
		<Wrapper>
			<SearchbarButton onClick={setSearchbar}>
				<FormattedMessage id={`header.${searchbar ? 'close' : 'open'}Searchbar`}>
					{title => <Loupe title={title} />}
				</FormattedMessage>
			</SearchbarButton>
		</Wrapper>
	);
};

export default SearchbarSwitcher;
