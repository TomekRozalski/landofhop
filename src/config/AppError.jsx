import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AppErrorContext = React.createContext({});

const AppError = ({ children }) => {
	const [appError, setAppError] = useState(null);

	return (
		<AppErrorContext.Provider
			value={{
				appError,
				resetError: () => setAppError(null),
				setAppError,
			}}
		>
			{ children }
		</AppErrorContext.Provider>
	);
};

AppError.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppError;
