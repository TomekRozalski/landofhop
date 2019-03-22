import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

import GlobalStateProvider from 'config/GlobalStateProvider';
import { unregisterServiceWorker } from './utils';

addLocaleData([...en, ...pl]);

ReactDOM.render(<GlobalStateProvider />, document.getElementById('root'));

unregisterServiceWorker();
