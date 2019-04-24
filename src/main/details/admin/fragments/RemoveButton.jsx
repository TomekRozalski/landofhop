import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { AuthenticationContext } from 'config';
import { removeBeverage as removeBeverageAction } from 'store/actions';
import { Button } from 'elements';

const RemoveButton = ({ id, removeBeverage }) => {
	const { token } = useContext(AuthenticationContext);

	const [thinking, setThinking] = useState(false);
	const [ready, setReady] = useState(false);

	const remove = () => {
		setThinking(true);
		setTimeout(() => {
			setReady(true);
			setThinking(false);
		}, 3000);
	};

	const confirm = () => {
		if (token) {
			removeBeverage({ id, token });
		} else {
			console.log('brak tokena');
		}
	};

	return (
		<Button
			isSubmitting={thinking}
			onClick={ready ? confirm : remove}
			resign
		>
			<FormattedMessage
				id={`details.removeBeverage.${
					ready ? 'areYouSure' : 'remove'
				}`}
			/>
		</Button>
	);
};

RemoveButton.propTypes = {
	id: PropTypes.string.isRequired,
	removeBeverage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	removeBeverage: removeBeverageAction,
};

export default connect(null, mapDispatchToProps)(RemoveButton);
