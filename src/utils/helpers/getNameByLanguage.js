export default ({ values, language }) => {
	const withMatchingLanguage = values.find(item => item.language === language);

	if (withMatchingLanguage) {
		return withMatchingLanguage;
	}

	const withNoLanguageAtAll = values.find(item => !item.language);

	if (withNoLanguageAtAll) {
		return withNoLanguageAtAll;
	}

	return values[0];
};
