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
		// AUTH
		auth: {
			method: 'GET',
			path: 'auth',
		},
		login: {
			method: 'POST',
			path: 'auth',
		},
		logout: {
			method: 'DELETE',
			path: 'auth',
		},
		// BEVERAGE
		beverage_list: {
			method: 'GET',
			path: 'beverage',
		},
		beverage_details: {
			method: 'GET',
			path: 'beverage',
			withParams: true,
		},
		beverage_remove: {
			method: 'DELETE',
			path: 'beverage',
		},
		beverage_save: {
			method: 'POST',
			path: 'beverage',
		},
		beverage_update: {
			method: 'PUT',
			path: 'beverage',
		},
		save_cap: {
			images: true,
			method: 'POST',
			path: 'beverage/cap',
		},
		save_cover: {
			images: true,
			method: 'POST',
			path: 'beverage/cover',
		},
		save_gallery: {
			images: true,
			method: 'POST',
			path: 'beverage/gallery',
		},
		remove_cap: {
			method: 'DELETE',
			path: 'beverage/cap',
		},
		remove_gallery: {
			method: 'DELETE',
			path: 'beverage/gallery',
		},
		// COUNTRY
		countries_list: {
			method: 'GET',
			path: 'country',
		},
		country_save: {
			method: 'POST',
			path: 'country',
		},
		// INGREDIENT
		ingredients_list: {
			method: 'GET',
			path: 'ingredient',
		},
		ingredient_save: {
			method: 'POST',
			path: 'ingredient',
		},
		// INSTITUTION
		institutions_list: {
			method: 'GET',
			path: 'institution',
		},
		institution_save: {
			method: 'POST',
			path: 'institution',
		},
		// PLACE
		places_list: {
			method: 'GET',
			path: 'place',
		},
		place_save: {
			method: 'POST',
			path: 'place',
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
		it: {
			code: 'it',
			phrase: 'Italian',
		},
		la: {
			code: 'la',
			phrase: 'Latin',
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
	notify: {
		type: {
			error: 'error',
			info: 'info',
			warning: 'warn',
			success: 'success',
		},
	},
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
