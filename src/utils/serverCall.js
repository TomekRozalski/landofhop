import constants from './constants';

const serverCall = ({ endpoint, type, ...rest }) => {
	if (type) {
		const { format, method, path } = type;
		let formData;

		if (format === 'JSON') {
			formData = 'application/json';
		}

		return (
			fetch(constants.servers.data + path, {
				credentials: 'include',
				...(formData && { headers: { 'Content-Type': formData } }),
				method,
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
