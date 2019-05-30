import { constants, dictionary } from 'utils';

export default (language) => {
	const dataLanguages = Object.values(constants.dataLanguages);

	if (!language) {
		const { code, phrase } = dataLanguages.find(item => item.code === '-');

		return {
			label: dictionary.pl[`language.${phrase}`],
			value: code,
		};
	}

	const { code, phrase } = dataLanguages.find(item => item.code === language);

	return {
		label: dictionary.pl[`language.${phrase}`],
		value: code,
	};
};
