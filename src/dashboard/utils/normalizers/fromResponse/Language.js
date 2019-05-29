import { constants, dictionary } from 'utils';

export default (language) => {
	if (!language) {
		return {
			label: dictionary.pl['language.notApplicable'],
			value: constants.dataLanguages.none,
		};
	}

	let label;

	switch (language) {
	case 'de':
		label = dictionary.pl['language.german'];
		break;
	case 'en':
		label = dictionary.pl['language.english'];
		break;
	case 'es':
		label = dictionary.pl['language.spanish'];
		break;
	case 'pl':
		label = dictionary.pl['language.polish'];
		break;
	case 'ua':
		label = dictionary.pl['language.ukrainian'];
		break;
	default:
		break;
	}

	return {
		label,
		value: language,
	};
};
