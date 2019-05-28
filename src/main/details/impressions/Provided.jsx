import React, { useContext } from 'react';
import { get, isNumber } from 'lodash';

import { BeverageDetailsContext } from 'config';
import { SectionWrapper } from './elements';
import {
	Bitterness,
	Fullness,
	Hoppyness,
	Power,
	Sweetness,
} from './fragments';

const Provided = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	return (
		isNumber(get(beverage, 'label.impressions.bitterness'))
		|| isNumber(get(beverage, 'producer.impressions.bitterness'))
		|| isNumber(get(beverage, 'label.impressions.sweetness'))
		|| isNumber(get(beverage, 'producer.impressions.sweetness'))
		|| isNumber(get(beverage, 'label.impressions.fullness'))
		|| isNumber(get(beverage, 'producer.impressions.fullness'))
		|| isNumber(get(beverage, 'label.impressions.power'))
		|| isNumber(get(beverage, 'producer.impressions.power'))
		|| isNumber(get(beverage, 'label.impressions.hoppyness'))
		|| isNumber(get(beverage, 'producer.impressions.hoppyness'))
	)
		? (
			<SectionWrapper type="provided">
				<Bitterness />
				<Sweetness />
				<Fullness />
				<Power />
				<Hoppyness />
			</SectionWrapper>
		) : null;
};

export default Provided;
