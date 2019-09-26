import constants from './constants';

const serverCall = ({
	params,
	type: {
		images,
		method,
		path,
		withParams,
	},
	...rest
}) => {
	const callTo = withParams
		? constants.servers.data + path + params
		: constants.servers.data + path;

	return (
		fetch(callTo, {
			credentials: 'include',
			...(!images && { headers: { 'Content-Type': 'application/json' } }),
			method,
			...rest,
		})
	);
};

export default serverCall;
