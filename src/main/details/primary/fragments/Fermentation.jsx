import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { DT, DD } from 'elements';

const Fermentation = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const fermentations = get(beverage, 'label.brewing.fermentation', []);

	return fermentations.length ? (
		<>
			<DT><FormattedMessage id="details.fermentation" /></DT>
			<DD>
				{
					fermentations
						.map(item => (
							<FormattedMessage
								key={item}
								id={`fermentationType.${item}`}
							/>
						))
				}
			</DD>
		</>
	) : null;
};

export default Fermentation;
