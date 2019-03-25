/* eslint
	default-case: 0,
	no-param-reassign: 0,
	no-useless-return: 0,
*/
import produce from 'immer';
import { unionBy } from 'lodash';
import moment from 'moment';

import actionsName from '../actionsName';

export const initialState = {
	basics: {
		isError: false,
		isLoading: false,
		list: [],
	},
	details: {
		isError: false,
		isLoading: false,
		list: [],
	},
};

const sortBeverages = beveragesList => (
	beveragesList.sort((a, b) => {
		const timestampA = Number(moment(a.added).format('x'));
		const timestampB = Number(moment(b.added).format('x'));

		return timestampB - timestampA;
	})
);

export default (state = initialState, action) => (
	produce(state, (draft) => {
		switch (action.type) {
		// -------------------------------
		// get basics

		case actionsName.GET_BEVERAGES_LIST_PENDING:
			draft.basics.isLoading = true;
			return;

		case actionsName.GET_BEVERAGES_LIST_FULFILLED:
			draft.basics.list = sortBeverages(unionBy(action.payload.basics, state.basics.list, 'id'));
			draft.basics.isError = false;
			draft.basics.isLoading = false;
			return;

		case actionsName.GET_BEVERAGES_LIST_REJECTED:
			draft.basics.isError = true;
			draft.basics.isLoading = false;
			return;

			// -------------------------------
			// get beverage details

		case actionsName.GET_BEVERAGE_DETAILS_PENDING:
			draft.details.isLoading = true;
			return;

		case actionsName.GET_BEVERAGE_DETAILS_FULFILLED:
			draft.details.list = sortBeverages(unionBy([action.payload.details], state.details.list, 'id'));
			draft.details.isError = false;
			draft.details.isLoading = false;
			return;

		case actionsName.GET_BEVERAGE_DETAILS_REJECTED:
			draft.details.isError = true;
			draft.details.isLoading = false;
			return;

			// -------------------------------
			// remove beverage

		case actionsName.REMOVE_BEVERAGE_PENDING:
			draft.basics.isLoading = true;
			draft.details.isLoading = true;
			return;

		case actionsName.REMOVE_BEVERAGE_FULFILLED:
			draft.basics.list = state.basics.list.filter(item => item.id !== action.payload.removed);
			draft.details.list = state.details.list.filter(item => item.id !== action.payload.removed);
			draft.basics.isError = false;
			draft.details.isError = false;
			draft.basics.isLoading = false;
			draft.details.isLoading = false;
			return;

		case actionsName.REMOVE_BEVERAGE_REJECTED:
			draft.basics.isError = true;
			draft.details.isError = true;
			draft.basics.isLoading = false;
			draft.details.isLoading = false;
			return;
		}
	})
);
