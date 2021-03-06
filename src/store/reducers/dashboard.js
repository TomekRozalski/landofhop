/* eslint
	default-case: 0,
	no-param-reassign: 0,
	no-useless-return: 0,
*/
import produce from 'immer';

import actionsName from '../actionsName';

export const initialState = {
	savedForms: {},
	lists: {
		countries: {
			values: [],
			isError: false,
			isLoaded: false,
			isLoading: false,
		},
		ingredients: {
			values: [],
			isError: false,
			isLoaded: false,
			isLoading: false,
		},
		institutions: {
			values: [],
			isError: false,
			isLoaded: false,
			isLoading: false,
		},
		places: {
			values: [],
			isError: false,
			isLoaded: false,
			isLoading: false,
		},
	},
	images: {
		cap: {
			isLoading: false,
			isError: false,
		},
		cover: {
			isLoading: false,
			isError: false,
		},
		gallery: {
			isLoading: false,
			isError: false,
		},
	},
};

export default (state = initialState, action) => (
	produce(state, (draft) => {
		switch (action.type) {
		case actionsName.CLEAR_BEVERAGE_DASHBOARD:
			draft.savedForms = {};
			return;

		case actionsName.SAVE_FORM_VALUES:
			draft.savedForms[action.payload.formName] = action.payload.values;
			return;

		case actionsName.GET_COUNTRIES_LIST_PENDING:
			draft.lists.countries.isLoading = true;
			return;

		case actionsName.GET_COUNTRIES_LIST_FULFILLED:
			draft.lists.countries.values = action.payload.countries
				.sort((a, b) => (a.label < b.label ? -1 : 1));
			draft.lists.countries.isError = false;
			draft.lists.countries.isLoaded = true;
			draft.lists.countries.isLoading = false;
			return;

		case actionsName.GET_COUNTRIES_LIST_REJECTED:
			draft.lists.countries.values = [];
			draft.lists.countries.isError = true;
			draft.lists.countries.isLoaded = false;
			draft.lists.countries.isLoading = false;
			return;

		case actionsName.GET_INGREDIENTS_LIST_PENDING:
			draft.lists.ingredients.isLoading = true;
			return;

		case actionsName.GET_INGREDIENTS_LIST_FULFILLED: {
			draft.lists.ingredients.values = action.payload.ingredients
				.sort((a, b) => (a.label < b.label ? -1 : 1));
			draft.lists.ingredients.isError = false;
			draft.lists.ingredients.isLoaded = true;
			draft.lists.ingredients.isLoading = false;
			return;
		}

		case actionsName.GET_INGREDIENTS_LIST_REJECTED:
			draft.lists.ingredients.values = [];
			draft.lists.ingredients.isError = true;
			draft.lists.ingredients.isLoaded = false;
			draft.lists.ingredients.isLoading = false;
			return;

		case actionsName.GET_INSTITUTIONS_LIST_PENDING:
			draft.lists.institutions.isLoading = true;
			return;

		case actionsName.GET_INSTITUTIONS_LIST_FULFILLED:
			draft.lists.institutions.values = action.payload.institutions
				.sort((a, b) => (a.label < b.label ? -1 : 1));
			draft.lists.institutions.isError = false;
			draft.lists.institutions.isLoaded = true;
			draft.lists.institutions.isLoading = false;
			return;

		case actionsName.GET_INSTITUTIONS_LIST_REJECTED:
			draft.lists.institutions.values = [];
			draft.lists.institutions.isError = true;
			draft.lists.institutions.isLoaded = false;
			draft.lists.institutions.isLoading = false;
			return;

		case actionsName.GET_PLACES_LIST_PENDING:
			draft.lists.places.isLoading = true;
			return;

		case actionsName.GET_PLACES_LIST_FULFILLED:
			draft.lists.places.values = action.payload.places
				.sort((a, b) => (a.label < b.label ? -1 : 1));
			draft.lists.places.isError = false;
			draft.lists.places.isLoaded = true;
			draft.lists.places.isLoading = false;
			return;

		case actionsName.GET_PLACES_LIST_REJECTED:
			draft.lists.places.values = [];
			draft.lists.places.isError = true;
			draft.lists.places.isLoaded = false;
			draft.lists.places.isLoading = false;
			return;

			// Gallery

		case actionsName.SAVE_BEVERAGE_GALLERY_PENDING:
		case actionsName.REMOVE_BEVERAGE_GALLERY_PENDING:
			draft.images.gallery.isLoading = true;
			return;

		case actionsName.SAVE_BEVERAGE_GALLERY_FULFILLED:
		case actionsName.REMOVE_BEVERAGE_GALLERY_FULFILLED:
			draft.images.gallery.isLoading = false;
			return;

		case actionsName.SAVE_BEVERAGE_GALLERY_REJECTED:
		case actionsName.REMOVE_BEVERAGE_GALLERY_REJECTED:
			draft.images.gallery.isLoading = false;
			draft.images.gallery.isError = true;
			return;

			// Cover

		case actionsName.SAVE_BEVERAGE_COVER_PENDING:
			draft.images.cover.isLoading = true;
			return;

		case actionsName.SAVE_BEVERAGE_COVER_FULFILLED:
			draft.images.cover.isLoading = false;
			return;

		case actionsName.SAVE_BEVERAGE_COVER_REJECTED:
			draft.images.cover.isLoading = false;
			draft.images.cover.isError = true;
			return;

			// Cap

		case actionsName.SAVE_CAP_PENDING:
		case actionsName.REMOVE_CAP_PENDING:
			draft.images.cap.isLoading = true;
			return;

		case actionsName.SAVE_CAP_FULFILLED:
		case actionsName.REMOVE_CAP_FULFILLED:
			draft.images.cap.isLoading = false;
			return;

		case actionsName.SAVE_CAP_REJECTED:
		case actionsName.REMOVE_CAP_REJECTED:
			draft.images.cap.isLoading = false;
			draft.images.cap.isError = true;
			return;
		}
	})
);
