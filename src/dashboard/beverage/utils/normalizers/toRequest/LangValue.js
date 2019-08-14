import { get } from 'lodash';
import { constants } from 'utils';

const LangValue = (({ lang, value }) => {
	const output = { value };

	if (get(lang, 'value') !== constants.dataLanguages.none.code) {
		output.language = get(lang, 'value');
	}

	return output;
});

export default LangValue;
