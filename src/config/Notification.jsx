import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { ToastContainer, toast } from 'react-toastify';

export const NotificationContext = React.createContext({});

const Notification = ({ children, intl }) => {
	const [appError, setAppError] = useState(null);

	const notify = ({ id, type, values }) => toast[type](
		intl.formatMessage({ id: `notify.${type}.${id}` }, { ...values }),
	);

	return (
		<NotificationContext.Provider
			value={{
				appError,
				notify,
				resetError: () => setAppError(null),
				setAppError,
			}}
		>
			{ children }
			<ToastContainer />
		</NotificationContext.Provider>
	);
};

Notification.propTypes = {
	children: PropTypes.node,
	intl: intlShape.isRequired,
};

Notification.defaultProps = {
	children: null,
};

export default injectIntl(Notification);
