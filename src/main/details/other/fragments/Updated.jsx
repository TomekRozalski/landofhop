import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { get } from 'lodash';
import moment from 'moment';

import { BeverageDetailsContext } from 'config';
import { DT, DD, Highlight } from 'elements';

const Updated = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const updated = get(beverage, 'updated');

	return updated && moment(updated).diff(beverage.added, 'days') > 0 ? (
		<>
			<DT><FormattedMessage id="details.updated" /></DT>
			<DD>
				<Highlight type="editorial">
					{ moment(updated).format('DD.MM.YYYY') }
				</Highlight>
			</DD>
		</>
	) : null;
};

export default Updated;
