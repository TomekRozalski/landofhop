import constants from './constants';
import en from './dictionary/en.json';
import grid from './grid';
import pl from './dictionary/pl.json';
import {
	register as registerServiceWorker,
	unregister as unregisterServiceWorker,
} from './serviceWorker';
import setContainerHeight from './setContainerHeight';

const dictionary = { en, pl };

export {
	constants,
	dictionary,
	grid,
	registerServiceWorker,
	setContainerHeight,
	unregisterServiceWorker,
};
