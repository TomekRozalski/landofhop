import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { DT, DD } from 'elements';

const Style = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const fermentations = get(beverage, 'label.brewing.style', []);

	return fermentations.length ? (
		<>
			<DT><FormattedMessage id="details.style" /></DT>
			<DD>
				{
					fermentations
						.map(({ language: itemLang, value }) => (
							itemLang === language
								? value
								: <span lang={itemLang}>{ value }</span>
						))
				}
			</DD>
		</>
	) : null;
};

export default Style;
