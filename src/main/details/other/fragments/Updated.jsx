import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { get } from 'lodash';
import { differenceInDays, format } from 'date-fns';

import { BeverageDetailsContext } from 'config';
import { DT, DD, Highlight } from 'elements';

const Updated = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const updated = get(beverage, 'updated');

	return updated && differenceInDays(
		new Date(updated),
		new Date(beverage.added),
	) > 0 ? (
		<>
			<DT><FormattedMessage id="details.updated" /></DT>
			<DD>
				<Highlight type="editorial">
					{format(
						new Date(updated),
						'dd.MM.yyyy',
					)}
				</Highlight>
			</DD>
		</>
		) : null;
};

export default Updated;
