import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Input, Label } from 'elements';
import { mq } from 'utils/theme';

const LabelWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	float: left;
	height: 3.4rem;
	margin-right: 2rem;

	${mq.md`
		grid-column: 3 / 4;
		grid-row: 1;
		float: none;
		height: auto;
		margin-right: 0;
	`}

	${mq.xl`
		grid-column: 4 / 5;
	`}
`;

const InputWrapper = styled.div`
	display: flex;
	align-items: center;

	${mq.md`
		grid-column: 4 / -1;
		grid-row: 1;
	`}

	${mq.xl`
		grid-column: 5 / -1;
	`}
`;

const Search = () => (
	<>
		<LabelWrapper>
			<Label htmlFor="search">
				<FormattedMessage id="navbar.searchLabel" />
			</Label>
		</LabelWrapper>
		<InputWrapper>
			<Input id="search" search />
		</InputWrapper>
	</>
);

export default Search;
