import React, { useContext } from 'react';
import { get } from 'lodash';

import { BeverageDetailsContext } from 'config';
import { SectionWrapper } from './elements';
import { Clarity, Color } from './fragments';

const Verified = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	return (
		get(beverage, 'editorial.impressions.color')
		|| get(beverage, 'editorial.impressions.clarity')
	)
		? (
			<SectionWrapper type="verified">
				<Color />
				<Clarity />
			</SectionWrapper>
		) : null;
};

export default Verified;
