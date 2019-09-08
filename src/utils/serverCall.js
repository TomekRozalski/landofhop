const serverCall = ({ endpoint, ...rest }) => (
	fetch(endpoint, {
		credentials: 'include',
		...rest,
	})
);

export default serverCall;
