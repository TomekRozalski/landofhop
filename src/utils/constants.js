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
		auth: {
			method: 'POST',
			path: 'auth/test',
		},
		beverage_details: 'beverages/details/',
		beverage_list: 'beverages/list/',
		beverage_remove: 'beverages/',
		beverage_save: 'beverages/',
		beverage_update: 'beverages/',
		beverage_update_gallery: 'beverages/gallery/',
		country_save: 'countries/',
		countries_list: 'countries/list/',
		ingredient_save: 'ingredients/',
		ingredients_list: 'ingredients/list/',
		institution_save: 'institutions/',
		institutions_list: 'institutions/list/',
		login: {
			method: 'POST',
			path: 'auth/login',
		},
		logout: {
			method: 'POST',
			path: 'auth/logout',
		},
		place_save: 'places/',
		places_list: 'places/list/',
		// COVER
		save_cover: {
			method: 'POST',
			path: 'beverages/cover',
		},
		// GALLERY
		save_gallery: {
			method: 'POST',
			path: 'beverages/gallery',
		},
		remove_gallery: {
			method: 'DELETE',
			path: 'beverages/gallery',
		},
		// CAP
		save_cap: {
			method: 'POST',
			path: 'beverages/cap',
		},
		remove_cap: {
			method: 'DELETE',
			path: 'beverages/cap',
		},
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
		pl: {
			code: 'pl',
			phrase: 'Polish',
		},
		en: {
			code: 'en',
			phrase: 'English',
		},
		cs: {
			code: 'cs',
			phrase: 'Czech',
		},
		da: {
			code: 'da',
			phrase: 'Danish',
		},
		de: {
			code: 'de',
			phrase: 'German',
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
	routes: {
		main: '/',
		details: '/details',
		contact: '/contact',
		addNewBeverage: '/add-new-beverage',
		updateBeverage: '/update-beverage',
		updateBeverageImages: '/update-beverage-images',
	},
	server_responses: {
		beverage_not_found: 'Beverage not found',
	},
	servers: {
		data: process.env.REACT_APP_SERVER_DATA,
		images: process.env.REACT_APP_SERVER_IMAGES,
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
