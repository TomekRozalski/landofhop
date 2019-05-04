import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { DT, DD } from 'elements';

const Style = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const styles = get(beverage, 'label.brewing.style', []);

	return styles.length ? (
		<>
			<DT><FormattedMessage id="details.style" /></DT>
			<DD>
				{
					styles
						.map(({ language: itemLang, value }) => (
							itemLang === language
								? <span key={value}>value</span>
								: <span key={value} lang={itemLang}>{ value }</span>
						))
						.reduce((prev, curr) => [prev, ', ', curr])
				}
			</DD>
		</>
	) : null;
};

export default Style;
