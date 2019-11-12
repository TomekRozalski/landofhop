/* eslint
	default-case: 0,
	no-param-reassign: 0,
	no-useless-return: 0,
*/
import produce from 'immer';
import { unionBy } from 'lodash';
import { isBefore } from 'date-fns';

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
	beveragesList.sort((a, b) => (isBefore(new Date(a.added), new Date(b.added)) ? 1 : -1))
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
		case actionsName.UPDATE_BEVERAGE_GALLERY_IMAGES_PENDING:
			draft.details.isLoading = true;
			return;

		case actionsName.GET_BEVERAGE_DETAILS_FULFILLED:
			draft.details.list = sortBeverages(unionBy([action.payload.details], state.details.list, 'id'));
			draft.details.isError = false;
			draft.details.isLoading = false;
			return;

		case actionsName.GET_BEVERAGE_DETAILS_REJECTED:
		case actionsName.UPDATE_BEVERAGE_GALLERY_IMAGES_REJECTED:
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

			// -------------------------------
			// gallery

		case actionsName.SAVE_BEVERAGE_GALLERY_FULFILLED: {
			const dataToUpdate = state.details.list.find(({ id }) => id === action.payload.id);
			const beverageToUpdate = {
				...dataToUpdate,
				editorial: {
					...dataToUpdate.editorial,
					photos: {
						...dataToUpdate.editorial.photos,
						gallery: action.payload.files,
					},
				},
			};
			draft.details.list = unionBy([beverageToUpdate], state.details.list, 'id');
			return;
		}

		case actionsName.REMOVE_BEVERAGE_GALLERY_FULFILLED: {
			const dataToUpdate = state.details.list.find(({ id }) => id === action.payload.id);
			delete (dataToUpdate.editorial.photos.gallery);
			draft.details.list = unionBy([dataToUpdate], state.details.list, 'id');
			draft.details.isError = false;
			draft.details.isLoading = false;
			return;
		}

		// -------------------------------
		// cap

		case actionsName.SAVE_CAP_FULFILLED: {
			const dataToUpdate = state.details.list.find(({ id }) => id === action.payload.id);
			const beverageToUpdate = {
				...dataToUpdate,
				editorial: {
					...dataToUpdate.editorial,
					cap: true,
				},
			};
			draft.details.list = unionBy([beverageToUpdate], state.details.list, 'id');
			return;
		}

		case actionsName.REMOVE_CAP_FULFILLED: {
			const dataToUpdate = state.details.list.find(({ id }) => id === action.payload.id);
			delete (dataToUpdate.editorial.cap);
			draft.details.list = unionBy([dataToUpdate], state.details.list, 'id');
			return;
		}
		}
	})
);
