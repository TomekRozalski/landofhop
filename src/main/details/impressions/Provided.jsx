import React, { useContext } from 'react';
import { get } from 'lodash';

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
		get(beverage, 'label.impressions.bitterness')
		|| get(beverage, 'producer.impressions.bitterness')
		|| get(beverage, 'label.impressions.sweetness')
		|| get(beverage, 'producer.impressions.sweetness')
		|| get(beverage, 'label.impressions.fullness')
		|| get(beverage, 'producer.impressions.fullness')
		|| get(beverage, 'label.impressions.power')
		|| get(beverage, 'producer.impressions.power')
		|| get(beverage, 'label.impressions.hoppyness')
		|| get(beverage, 'producer.impressions.hoppyness')
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
