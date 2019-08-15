import { constants } from 'utils';
import actionsName from '../../actionsName';

const saveImagesBeverageGallery = ({
	filesToRequest,
	params: { badge, brand, shortId },
	token,
}) => (
	dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.SAVE_BEVERAGE_GALLERY_PENDING,
			});

			const formData = new FormData();
			filesToRequest.forEach((image) => {
				formData.append('image', image);
			});

			const server = constants.servers.data;
			const { method, path } = constants.api_endpoints.images_beverage_gallery_save;
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
							type: actionsName.SAVE_BEVERAGE_GALLERY_FULFILLED,
						});
						resolve(filesToRequest.length);
					} else {
						throw new Error('Something went wrong');
					}
				})
				.catch(() => {
					dispatch({
						type: actionsName.SAVE_BEVERAGE_GALLERY_REJECTED,
					});
					reject();
				});
		})
	)
);

export default saveImagesBeverageGallery;
