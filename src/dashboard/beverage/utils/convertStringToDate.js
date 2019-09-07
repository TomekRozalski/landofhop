import { isValid } from 'date-fns';

const convertStringToDate = (value) => {
	const group = value
		.match(/^(\d\d).(\d\d).(\d\d\d\d), (\d\d):(\d\d):(\d\d)$/, 'g');

	if (!group) {
		return false;
	}

	const [day, month, year, hour, minute, second] = group.slice(1);
	const formattedString = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

	if (!isValid(new Date(formattedString))) {
		return false;
	}

	return new Date(formattedString);
};

export default convertStringToDate;
