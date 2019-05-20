import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { Highlight } from 'elements';
import { ColorIndicator, DT } from '../elements';

const Color = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const value = get(beverage, 'editorial.impressions.color');

	return value ? (
		<>
			<DT>
				<Highlight type="editorial">
					<FormattedMessage id="details.color" />
				</Highlight>
			</DT>
			<ColorIndicator value={value} />
		</>
	) : null;
};

export default Color;
