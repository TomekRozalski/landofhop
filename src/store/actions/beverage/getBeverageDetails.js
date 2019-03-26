import PropTypes from 'prop-types';

import { constants } from 'utils';
import actionsName from '../../actionsName';

const getBeveragesList = ({
	badge,
	brand,
	shortId,
}) => (
	dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.GET_BEVERAGE_DETAILS_PENDING,
			});

			const endpoint = `${constants.servers.main}${constants.api_endpoints.beverage_details}${shortId}/${brand}/${badge}`;

			fetch(endpoint)
				.then(res => res.json())
				.then((details) => {
					dispatch({
						type: actionsName.GET_BEVERAGE_DETAILS_FULFILLED,
						payload: { details },
					});
					resolve(details);
				})
				.catch(() => {
					dispatch({
						type: actionsName.GET_BEVERAGE_DETAILS_REJECTED,
					});
					reject();
				});
		})
	)
);

getBeveragesList.propTypes = {
	badge: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	shortId: PropTypes.string.isRequired,
};

export default getBeveragesList;
