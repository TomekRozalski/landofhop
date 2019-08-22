import { constants } from 'utils';
import actionsName from '../../actionsName';

const removeCap = ({ id, params, token }) => (
	async (dispatch) => {
		dispatch({
			type: actionsName.REMOVE_CAP_PENDING,
		});

		try {
			const res = await fetch(constants.servers.data + constants.api_endpoints.remove_cap.path, {
				method: constants.api_endpoints.remove_cap.method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ id, params }),
			});

			if (res.status === 200) {
				dispatch({
					type: actionsName.REMOVE_CAP_FULFILLED,
					payload: { id },
				});
			} else {
				throw new Error('Something went wrong');
			}
		} catch {
			dispatch({
				type: actionsName.REMOVE_CAP_REJECTED,
			});
		}
	}
);

export default removeCap;
