import React, { useContext, useState } from 'react';
import {
	func,
	number,
	shape,
	string,
} from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { AuthenticationContext } from 'config';
import { constants } from 'utils';
import { removeBeverage as removeBeverageAction } from 'store/actions';
import { Button } from 'elements';

const RemoveButton = ({
	files,
	history,
	id,
	params,
	removeBeverage,
}) => {
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
		history.push(constants.routes.main);
		removeBeverage({
			files,
			id,
			params,
			token,
		});
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
	files: number,
	history: shape({
		push: func.isRequired,
	}).isRequired,
	id: string.isRequired,
	params: shape({
		badge: string.isRequired,
		brand: string.isRequired,
		shortId: string.isRequired,
	}).isRequired,
	removeBeverage: func.isRequired,
};

RemoveButton.defaultProps = {
	files: 0,
};

const mapDispatchToProps = {
	removeBeverage: removeBeverageAction,
};

const enhanced = compose(
	withRouter,
	connect(null, mapDispatchToProps),
);

export default enhanced(RemoveButton);
