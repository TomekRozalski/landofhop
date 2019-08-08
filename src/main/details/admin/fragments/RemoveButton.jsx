import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { AuthenticationContext } from 'config';
import { removeBeverage as removeBeverageAction } from 'store/actions';
import { Button } from 'elements';

const RemoveButton = ({ history, id, removeBeverage }) => {
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
			history.push('/');
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
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	id: PropTypes.string.isRequired,
	removeBeverage: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	removeBeverage: removeBeverageAction,
};

const enhanced = compose(
	withRouter,
	connect(null, mapDispatchToProps),
);

export default enhanced(RemoveButton);
