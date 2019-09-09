import constants from './constants';

const serverCall = ({ endpoint, type, ...rest }) => {
	if (type) {
		const { method, path } = type;

		return (
			fetch(constants.servers.data + path, {
				method,
				credentials: 'include',
				...rest,
			})
		);
	}

	return (
		fetch(endpoint, {
			credentials: 'include',
			...rest,
		})
	);
};

export default serverCall;
