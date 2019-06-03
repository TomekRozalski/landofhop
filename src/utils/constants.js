export default {
	aged: {
		type: {
			barrel: 'barrel',
			wood: 'wood',
		},
		wood: {
			beech: 'beech',
			oak: 'oak',
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
	api_endpoints: {
		authenticate_token: 'auth/',
		beverage_details: 'beverages/details/',
		beverage_list: 'beverages/list/',
		beverage_remove: 'beverages/',
		beverage_save: 'beverages/',
		beverage_update: 'beverages/',
		country_save: 'countries/',
		countries_list: 'countries/list/',
		ingredient_save: 'ingredients/',
		ingredients_list: 'ingredients/list/',
		institution_save: 'institutions/',
		institutions_list: 'institutions/list/',
		login: 'login/',
		place_save: 'places/',
		places_list: 'places/list/',
	},
	clarity: {
		clear: 'clear',
		crystalline: 'crystalline',
		hazy: 'hazy',
		misty: 'misty',
		muddy: 'muddy',
		opalescent: 'opalescent',
	},
	container: {
		types: {
			bottle: 'bottle',
			can: 'can',
		},
	},
	details: {
		separators: {
			item: ', ',
			section: ' / ',
		},
		type: {
			label: 'label',
			producer: 'producer',
			editorial: 'editorial',
		},
	},
	dataLanguages: {
		da: {
			code: 'da',
			phrase: 'Danish',
		},
		de: {
			code: 'de',
			phrase: 'German',
		},
		en: {
			code: 'en',
			phrase: 'English',
		},
		es: {
			code: 'es',
			phrase: 'Spanish',
		},
		fr: {
			code: 'fr',
			phrase: 'French',
		},
		nl: {
			code: 'nl',
			phrase: 'Dutch',
		},
		pl: {
			code: 'pl',
			phrase: 'Polish',
		},
		ua: {
			code: 'ua',
			phrase: 'Ukrainian',
		},
		none: {
			code: '-',
			phrase: 'notApplicable',
		},
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
	fermentations: {
		top: 'top',
		bottom: 'bottom',
		spontaneous: 'spontaneous',
	},
	none: '-',
	server_responses: {
		authentication_secceeded: 'Authentication succeeded',
		beverage_not_found: 'Beverage not found',
	},
	servers: {
		main: 'http://localhost:3100/',
	},
	siteLanguages: {
		pl: 'pl',
		en: 'en',
	},
	temperature: {
		units: {
			celcius: 'celcius',
		},
	},
};
