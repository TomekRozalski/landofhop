import moment from 'moment';

const convertStringToDate = (value) => {
	const group = value
		.match(/^(\d\d).(\d\d).(\d\d\d\d), (\d\d):(\d\d):(\d\d)$/, 'g');

	if (!group) {
		return false;
	}

	const [day, month, year, hour, minute, second] = group.slice(1);
	const formattedDate = moment(`${year}-${month}-${day} ${hour}:${minute}:${second}`);

	if (formattedDate.format() === 'Invalid date') {
		return false;
	}

	return formattedDate.toDate();
};

export default convertStringToDate;
