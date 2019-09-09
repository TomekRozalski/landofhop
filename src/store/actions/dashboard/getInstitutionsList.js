import { constants, serverCall } from 'utils';
import actionsName from '../../actionsName';

const getInstitutionsList = () => (
	async (dispatch) => {
		dispatch({
			type: actionsName.GET_INSTITUTIONS_LIST_PENDING,
		});

		try {
			const res = await serverCall({
				type: constants.api_endpoints.institutions_list,
			});
			const institutions = await res.json();

			dispatch({
				type: actionsName.GET_INSTITUTIONS_LIST_FULFILLED,
				payload: { institutions },
			});
		} catch {
			dispatch({
				type: actionsName.GET_INSTITUTIONS_LIST_REJECTED,
			});
		}
	}
);

export default getInstitutionsList;
