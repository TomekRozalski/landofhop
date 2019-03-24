export default ({ values, language }) => {
	const withMatchingLanguage = values.find(item => item.language === language);

	if (withMatchingLanguage) {
		return withMatchingLanguage.value;
	}

	const withNoLanguageAtAll = values.find(item => !item.language);

	if (withNoLanguageAtAll) {
		return withNoLanguageAtAll.value;
	}

	return values[0].value;
};
