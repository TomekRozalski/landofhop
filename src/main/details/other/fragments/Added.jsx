import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import { BeverageDetailsContext } from 'config';
import { DT, DD, Highlight } from 'elements';

const Added = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	return (
		<>
			<DT><FormattedMessage id="details.added" /></DT>
			<DD>
				<Highlight type="editorial">
					{ moment(beverage.added).format('DD.MM.YYYY') }
				</Highlight>
			</DD>
		</>
	);
};

export default Added;
