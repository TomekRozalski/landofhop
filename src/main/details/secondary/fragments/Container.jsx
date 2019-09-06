import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { DT, DD } from 'elements';

const Container = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const {
		color,
		material,
		type,
		unit,
		value,
	} = get(beverage, 'label.container');

	return (
		<>
			<DT><FormattedMessage id="details.container" /></DT>
			<DD>
				<FormattedMessage id={`container.type.${type}`} />
				{' '}
				<FormattedMessage id={`container.material.${material}`} />
				{', '}
				<FormattedMessage id={`container.color.${color}`} />
				{', '}
				{value}
				{' '}
				{unit}
			</DD>
		</>
	);
};

export default Container;
