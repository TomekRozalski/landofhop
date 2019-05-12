import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { DT, DD } from 'elements';

const Barcode = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const value = get(beverage, 'label.general.barcode');

	return value ? (
		<>
			<DT><FormattedMessage id="details.barcode" /></DT>
			<DD>{ value }</DD>
		</>
	) : null;
};

export default Barcode;
