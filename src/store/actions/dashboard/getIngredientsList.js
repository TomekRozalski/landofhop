import { constants } from 'utils';
import actionsName from '../../actionsName';

const getIngredientsList = () => (
	async (dispatch) => {
		dispatch({
			type: actionsName.GET_INGREDIENTS_LIST_PENDING,
		});

		try {
			const res = await fetch(
				constants.servers.main
				+ constants.api_endpoints.ingredients_list,
			);
			const ingredients = await res.json();

			dispatch({
				type: actionsName.GET_INGREDIENTS_LIST_FULFILLED,
				payload: { ingredients },
			});
		} catch {
			dispatch({
				type: actionsName.GET_INGREDIENTS_LIST_REJECTED,
			});
		}
	}
);

export default getIngredientsList;
