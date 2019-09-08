import { constants, serverCall } from 'utils';
import actionsName from '../../actionsName';

const saveBeverageCover = ({
	file,
	params: { badge, brand, shortId },
	token,
}) => (
	dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.SAVE_BEVERAGE_COVER_PENDING,
			});

			const formData = new FormData();
			formData.append('badge', badge);
			formData.append('brand', brand);
			formData.append('image', file);
			formData.append('shortId', shortId);

			const server = constants.servers.data;
			const { method, path } = constants.api_endpoints.save_cover;

			serverCall({
				endpoint: server + path,
				method,
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: formData,
			})
				.then(({ status }) => {
					if (status === 200) {
						dispatch({
							type: actionsName.SAVE_BEVERAGE_COVER_FULFILLED,
						});
						resolve();
					} else {
						throw new Error('Something went wrong');
					}
				})
				.catch(() => {
					dispatch({
						type: actionsName.SAVE_BEVERAGE_COVER_REJECTED,
					});
					reject();
				});
		})
	)
);

export default saveBeverageCover;
