import { constants } from 'utils';
import actionsName from '../../actionsName';

const removeBeverage = ({ id, token }) => (
	dispatch => (
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
				.then(({ status }) => {
					if (status === 200) {
						dispatch({
							type: actionsName.REMOVE_BEVERAGE_FULFILLED,
							payload: {
								removed: id,
							},
						});
						resolve();
					} else {
						throw new Error('Something went wrong');
					}
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
