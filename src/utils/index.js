import constants from './constants';
import en from './dictionary/en.json';
import grid from './grid';
import pl from './dictionary/pl.json';
import {
	register as registerServiceWorker,
	unregister as unregisterServiceWorker,
} from './serviceWorker';
import serverCall from './serverCall';
import setCoverHeight from './setCoverHeight';

const dictionary = { en, pl };

export {
	constants,
	dictionary,
	grid,
	registerServiceWorker,
	serverCall,
	setCoverHeight,
	unregisterServiceWorker,
};
