import React from 'react';
import { oneOf } from 'prop-types';

import { constants } from 'utils';
import { BrokenBottle, BrokenCan } from 'elements/icons';

const BrokenContainer = ({ type }) => {
	const { bottle, can } = constants.container.types;

	if (type === bottle) {
		return <BrokenBottle />;
	}

	if (type === can) {
		return <BrokenCan />;
	}

	return null;
};

BrokenContainer.propTypes = {
	type: oneOf([constants.container.types.bottle, constants.container.types.can]).isRequired,
};

export default BrokenContainer;
