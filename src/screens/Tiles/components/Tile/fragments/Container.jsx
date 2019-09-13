import React from 'react';
import { oneOf } from 'prop-types';

import { constants } from 'utils';
import { Bottle, Can } from 'elements/icons';

const Container = ({ type }) => {
	const { bottle, can } = constants.container.types;

	if (type === bottle) {
		return <Bottle />;
	}

	if (type === can) {
		return <Can />;
	}

	return null;
};

Container.propTypes = {
	type: oneOf([constants.container.types.bottle, constants.container.types.can]).isRequired,
};

export default Container;
