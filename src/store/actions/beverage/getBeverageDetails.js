import PropTypes from 'prop-types';

import { constants } from 'utils';
import actionsName from '../../actionsName';

const getBeveragesList = ({
	badge,
	brand,
	short_id: shortId,
}) => (
	async (dispatch) => {
		dispatch({
			type: actionsName.GET_BEVERAGE_DETAILS_PENDING,
		});

		try {
			const endpoint = `${constants.servers.main}${constants.api_endpoints.beverage_details}${shortId}/${brand}/${badge}`;
			const res = await fetch(endpoint);
			const details = await res.json();

			dispatch({
				type: actionsName.GET_BEVERAGE_DETAILS_FULFILLED,
				payload: { details },
			});
		} catch {
			dispatch({
				type: actionsName.GET_BEVERAGE_DETAILS_REJECTED,
			});
		}
	}
);

getBeveragesList.propTypes = {
	badge: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	short_id: PropTypes.string.isRequired,
};

export default getBeveragesList;
