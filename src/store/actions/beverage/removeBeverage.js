import { constants } from 'utils';
import actionsName from '../../actionsName';

const removeBeverage = ({ id, token }) => (
	async dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.REMOVE_BEVERAGE_PENDING,
			});

			fetch(constants.servers.main + constants.api_endpoints.beverage_remove, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ id }),
			})
				.then(() => {
					dispatch({
						type: actionsName.REMOVE_BEVERAGE_FULFILLED,
						payload: {
							removed: id,
						},
					});
					resolve();
				})
				.catch(() => {
					dispatch({
						type: actionsName.REMOVE_BEVERAGE_REJECTED,
					});
					reject();
				});
		})
	)
);

export default removeBeverage;
