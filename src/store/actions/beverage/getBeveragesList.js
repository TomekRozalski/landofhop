import constants from 'utils/constants';
import actionsName from 'store/actionsName';

import { serverCall } from 'utils';

const getBeveragesList = () => (
	async dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.GET_BEVERAGES_LIST_PENDING,
			});

			serverCall({ type: constants.api_endpoints.beverage_list })
				.then((res) => {
					if (res.status !== 200) {
						throw new Error();
					}
					return res;
				})
				.then(res => res.json())
				.then((basics) => {
					dispatch({
						type: actionsName.GET_BEVERAGES_LIST_FULFILLED,
						payload: { basics },
					});
					resolve(basics);
				})
				.catch(() => {
					dispatch({
						type: actionsName.GET_BEVERAGES_LIST_REJECTED,
					});
					reject();
				});
		})
	)
);

export default getBeveragesList;
