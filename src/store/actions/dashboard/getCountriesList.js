import { constants, serverCall } from 'utils';
import actionsName from '../../actionsName';

const getCountriesList = () => (
	async (dispatch) => {
		dispatch({
			type: actionsName.GET_COUNTRIES_LIST_PENDING,
		});

		try {
			const res = await serverCall({
				endpoint: constants.servers.data
				+ constants.api_endpoints.countries_list
				+ constants.siteLanguages.pl,
			});
			const countries = await res.json();

			dispatch({
				type: actionsName.GET_COUNTRIES_LIST_FULFILLED,
				payload: { countries },
			});
		} catch {
			dispatch({
				type: actionsName.GET_COUNTRIES_LIST_REJECTED,
			});
		}
	}
);

export default getCountriesList;
