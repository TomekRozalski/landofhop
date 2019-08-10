import React from 'react';
import {
	arrayOf,
	number,
	shape,
	string,
} from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors, fonts } from 'utils/theme';

const Wrapper = styled.div`
	grid-column: 1 / -1;
	border: .5rem solid ${colors.warning.strong};
	padding: 2rem;
`;

const Header = styled.h3`
	margin-bottom: 1rem;
	font: 700 2rem ${fonts.primary};
`;

const List = styled.ul`
	margin: 1rem 0;
`;

const ListItem = styled.li`
    margin: 0 3rem;
	list-style-type: square;
`;

const ErrorBox = ({ errors }) => (
	<Wrapper>
		<Header><FormattedMessage id="dashboard.updateBeverageImages.wrongFileUploaded.title" /></Header>
		<FormattedMessage
			id="dashboard.updateBeverageImages.wrongFileUploaded.rejectedFiles"
			values={{ value: errors.length }}
		/>
		<List>
			{ errors.map(({ name, size, type }) => (
				<ListItem>
					<FormattedMessage
						id="dashboard.updateBeverageImages.wrongFileUploaded.rejectedFileInfo"
						values={{
							name,
							size: Math.round(size / 1024),
							type,
						}}
					/>
				</ListItem>
			))}
		</List>
		<FormattedMessage id="dashboard.updateBeverageImages.wrongFileUploaded.instruction" />
	</Wrapper>
);

ErrorBox.propTypes = {
	errors: arrayOf(
		shape({
			name: string.isRequired,
			size: number.isRequired,
			type: string.isRequired,
		}).isRequired,
	).isRequired,
};

export default ErrorBox;
