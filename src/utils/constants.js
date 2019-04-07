export default {
	siteLanguages: {
		pl: 'pl',
		en: 'en',
	},
	dataLanguages: {
		pl: 'pl',
		en: 'en',
		de: 'de',
		es: 'es',
		none: '-',
	},
	servers: {
		main: 'http://localhost:3100/',
	},
	api_endpoints: {
		authenticate_token: 'auth/',
		beverage_details: 'beverages/details/',
		beverage_list: 'beverages/list/',
		beverage_remove: 'beverages/',
		country_save: 'countries/',
		countries_list: 'countries/list/',
		institution_save: 'institutions/',
		ingredients_list: 'ingredients/list/',
		institutions_list: 'institutions/list/',
		login: 'login/',
		place_save: 'places/',
		places_list: 'places/list/',
	},
	server_responses: {
		authentication_secceeded: 'Authentication succeeded',
	},
	fermentations: {
		top: 'top',
		bottom: 'bottom',
		spontaneous: 'spontaneous',
	},
	extract: {
		relates: {
			weight: 'weight',
			plato: 'plato',
			blg: 'blg',
		},
		units: {
			percent: 'percent',
			degree: 'degree',
		},
	},
	alcohol: {
		relates: {
			capacity: 'capacity',
			abv: 'abv',
		},
		units: {
			percent: 'percent',
			degree: 'degree',
		},
	},
};
