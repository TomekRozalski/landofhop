import { constants } from 'utils';
import actionsName from '../../actionsName';

const getPlacesList = () => (
	async (dispatch) => {
		dispatch({
			type: actionsName.GET_PLACES_LIST_PENDING,
		});

		try {
			const res = await fetch(
				constants.servers.main
				+ constants.api_endpoints.places_list,
			);
			const places = await res.json();

			dispatch({
				type: actionsName.GET_PLACES_LIST_FULFILLED,
				payload: { places },
			});
		} catch {
			dispatch({
				type: actionsName.GET_PLACES_LIST_REJECTED,
			});
		}
	}
);

export default getPlacesList;
