import constants from 'utils/constants';
import actionsName from 'store/actionsName';

import { serverCall } from 'utils';

const getBeveragesList = () => (
	async (dispatch) => {
		dispatch({
			type: actionsName.GET_BEVERAGES_LIST_PENDING,
		});

		try {
			const res = await serverCall({
				endpoint: constants.servers.data + constants.api_endpoints.beverage_list,
			});
			const basics = await res.json();

			dispatch({
				type: actionsName.GET_BEVERAGES_LIST_FULFILLED,
				payload: { basics },
			});
		} catch {
			dispatch({
				type: actionsName.GET_BEVERAGES_LIST_REJECTED,
			});
		}
	}
);

export default getBeveragesList;
