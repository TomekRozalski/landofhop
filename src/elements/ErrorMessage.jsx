import React, { lazy, Suspense, useContext } from 'react';

import { NavigationContext } from 'config';
import { Overlay, Spinner } from './index';

const Popup = lazy(() => import('./Popup'));

const ErrorMessage = () => {
	const { appError, resetError } = useContext(NavigationContext);

	return (
		appError ? (
			<Suspense fallback={<Spinner center />}>
				<Overlay />
				<Popup close={resetError} appError={appError} />
			</Suspense>
		) : null
	);
};

export default ErrorMessage;
