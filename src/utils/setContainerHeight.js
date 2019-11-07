import { number, string } from 'prop-types';

const setContainerHeight = ({ unit, type, value }) => {
	if (unit === 'ml') {
		if (type === 'bottle') {
			switch (value) {
			case 750:
				return 592;
			case 500:
			case 450:
				return 500;
			case 375:
			case 330:
			case 300:
			case 250:
				return 446;
			default:
				return 0;
			}
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
