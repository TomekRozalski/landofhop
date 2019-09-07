import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { format } from 'date-fns';

import { BeverageDetailsContext } from 'config';
import { DT, DD, Highlight } from 'elements';

const Added = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	return (
		<>
			<DT><FormattedMessage id="details.added" /></DT>
			<DD>
				<Highlight type="editorial">
					{format(
						new Date(beverage.added),
						'dd.MM.yyyy',
					)}
				</Highlight>
			</DD>
		</>
	);
};

export default Added;
