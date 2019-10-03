import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { ToastContainer, toast } from 'react-toastify';

export const NotificationContext = React.createContext({});

const Notification = ({ children, intl }) => {
	const notify = ({ id, type, values }) => {
		console.log('object');

		return toast[type](
			intl.formatMessage({ id: `notify.${type}.${id}` }, { ...(values || {}) }),
		);
	};

	return (
		<NotificationContext.Provider value={{ notify }}>
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
