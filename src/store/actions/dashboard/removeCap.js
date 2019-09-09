import { constants, serverCall } from 'utils';
import actionsName from '../../actionsName';

const removeCap = ({ id, params }) => (
	async (dispatch) => {
		dispatch({
			type: actionsName.REMOVE_CAP_PENDING,
		});

		try {
			const res = await serverCall({
				type: constants.api_endpoints.remove_cap,
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
