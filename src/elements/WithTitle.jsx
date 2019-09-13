import React from 'react';
import { node, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

const WithTitle = ({ children, title }) => (
	<>
		{ children }
		<FormattedMessage id={title}>
			{value => <Helmet><title>{value}</title></Helmet>}
		</FormattedMessage>
	</>
);

WithTitle.propTypes = {
	children: node.isRequired,
	title: string.isRequired,
};

export default WithTitle;
