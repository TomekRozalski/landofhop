import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { Highlight } from 'elements';
import { DT } from '../elements';

const Clarity = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const value = get(beverage, 'editorial.impressions.clarity');

	return value ? (
		<>
			<DT>
				<Highlight type="editorial">
					<FormattedMessage id="details.clarity" />
				</Highlight>
			</DT>
			<span>{ value }</span>
		</>
	) : null;
};

export default Clarity;
