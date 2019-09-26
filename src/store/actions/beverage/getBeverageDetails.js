import PropTypes from 'prop-types';

import { constants, serverCall } from 'utils';
import actionsName from '../../actionsName';

const getBeverageDetails = ({
	badge,
	brand,
	shortId,
}) => (
	dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.GET_BEVERAGE_DETAILS_PENDING,
			});

			serverCall({
				type: constants.api_endpoints.beverage_details,
				params: `/${shortId}/${brand}/${badge}`,
			})
				.then((res) => {
					if (res.status !== 200) {
						throw new Error();
					}
					return res;
				})
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

getBeverageDetails.propTypes = {
	badge: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	shortId: PropTypes.string.isRequired,
};

export default getBeverageDetails;
