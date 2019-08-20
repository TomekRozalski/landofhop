import { constants } from 'utils';
import actionsName from '../../actionsName';

const saveBeverageCover = ({
	fileToRequest,
	params: { badge, brand, shortId },
	token,
}) => (
	dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.SAVE_BEVERAGE_COVER_PENDING,
			});

			const formData = new FormData();
			formData.append('image', fileToRequest);

			const server = constants.servers.data;
			const { method, path } = constants.api_endpoints.images_beverage_cover_save;
			const endpoint = `${server}${path}${shortId}/${brand}/${badge}`;

			fetch(endpoint, {
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
