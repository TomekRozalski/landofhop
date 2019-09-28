import { constants, serverCall } from 'utils';
import actionsName from '../../actionsName';

const removeBeverage = ({
	files,
	id,
	params,
	token,
}) => (
	dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.REMOVE_BEVERAGE_PENDING,
			});

			serverCall({
				type: constants.api_endpoints.beverage_remove,
				body: JSON.stringify({ files, id, params }),
				token,
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
