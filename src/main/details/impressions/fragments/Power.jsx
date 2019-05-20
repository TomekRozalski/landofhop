/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { get, isNumber } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { Highlight } from 'elements';
import { DT, PercentIndicator } from '../elements';

const Power = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelValues = get(beverage, 'label.impressions.power');
	const producerValues = get(beverage, 'producer.impressions.power');

	const { type } = constants.details;

	const values = [
		{ type: type.label, value: labelValues },
		{ type: type.producer, value: producerValues },
	];

	const formattedValues = values
		.filter(item => isNumber(item.value))
		.map(({ type, value }) => (
			<React.Fragment key={type}>
				<DT>
					<Highlight type={type}>
						<FormattedMessage id="details.power" />
					</Highlight>
				</DT>
				<PercentIndicator value={value}>{value}</PercentIndicator>
			</React.Fragment>
		));

	return formattedValues.length ? formattedValues : null;
};

export default Power;
