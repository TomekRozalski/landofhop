import constants from './constants';

const serverCall = ({
	params,
	type: {
		images,
		method,
		path,
		withParams,
	},
	token,
	...rest
}) => {
	const callTo = withParams
		? constants.servers.data + path + params
		: constants.servers.data + path;

	return (
		fetch(callTo, {
			credentials: 'include',
			...((token || !images) && {
				headers: {
					...(!images && { 'Content-Type': 'application/json' }),
					...(token && { Authorization: `Bearer ${token}` }),
				},
			}),
			method,
			...rest,
		})
	);
};

export default serverCall;
