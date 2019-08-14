import { dictionary, constants } from 'utils';

const languages = language => Object.values(constants.dataLanguages)
	.map(({ code, phrase }) => ({
		label: dictionary[language][`language.${phrase}`],
		value: code,
	}));

export default languages;
