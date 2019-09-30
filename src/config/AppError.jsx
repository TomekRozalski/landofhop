import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppErrorContext = React.createContext({});

const AppError = ({ children, intl }) => {
	const [appError, setAppError] = useState(null);

	const success = (message) => {
		if (message.id) {
			return toast.success(intl.formatMessage({ id: message.id }, { ...message.values }));
		}

		return toast.success(message);
	};

	return (
		<AppErrorContext.Provider
			value={{
				appError,
				success,
				resetError: () => setAppError(null),
				setAppError,
			}}
		>
			{ children }
			<ToastContainer />
		</AppErrorContext.Provider>
	);
};

AppError.propTypes = {
	children: PropTypes.node,
	intl: intlShape.isRequired,
};

AppError.defaultProps = {
	children: null,
};

export default injectIntl(AppError);
