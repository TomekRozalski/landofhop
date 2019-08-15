import { constants } from 'utils';
import actionsName from '../../actionsName';

const removeBeverageGallery = ({
	files,
	params: { badge, brand, shortId },
	token,
}) => (
	dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.REMOVE_BEVERAGE_GALLERY_PENDING,
			});

			fetch(constants.servers.data + constants.api_endpoints.remove_gallery_images.path, {
				method: constants.api_endpoints.remove_gallery_images.method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					badge,
					brand,
					files,
					shortId,
				}),
			})
				.then(({ status }) => {
					if (status === 200) {
						dispatch({
							type: actionsName.REMOVE_BEVERAGE_GALLERY_FULFILLED,
						});
						resolve();
					} else {
						throw new Error('Something went wrong');
					}
				})
				.catch(() => {
					dispatch({
						type: actionsName.REMOVE_BEVERAGE_GALLERY_REJECTED,
					});
					reject();
				});
		})
	)
);

export default removeBeverageGallery;
