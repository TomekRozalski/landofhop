import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FormattedMessage } from 'react-intl';

import { HeaderContext, NavigationContext } from 'config';
import { colors, sizes } from 'utils/theme';
import { Loupe } from 'elements/icons';

const Wrapper = styled(animated.div)`
	grid-area: search;
	display: flex;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	width: 100%;
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

const SearchbarSwitcher = () => {
	const { isHeaderTall } = useContext(HeaderContext);
	const { searchbar, setSearchbar } = useContext(NavigationContext);

	const fade = useSpring({
		opacity: isHeaderTall ? 1 : 0,
		transform: isHeaderTall ? 'scale(1)' : 'scale(0.5)',
	});

	return (
		<Wrapper style={fade}>
			<Button onClick={setSearchbar}>
				<FormattedMessage id={`header.${searchbar ? 'close' : 'open'}Searchbar`}>
					{title => <Loupe title={title} />}
				</FormattedMessage>
			</Button>
		</Wrapper>
	);
};

export default SearchbarSwitcher;
