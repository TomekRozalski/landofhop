import { number, string } from 'prop-types';

const setContainerHeight = ({ unit, type, value }) => {
	if (unit === 'ml') {
		if (type === 'bottle') {
			return value > 400 ? 500 : 446;
		}

		if (type === 'can') {
			return value > 350 ? 363 : 248;
		}
	}

	return 100;
};

setContainerHeight.propTypes = {
	unit: string.isRequired,
	type: string.isRequired,
	value: number.isRequired,
};

export default setContainerHeight;
