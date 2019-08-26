import { constants } from 'utils';
import actionsName from '../../actionsName';

const removeBeverageGallery = ({
	files,
	id,
	params: { badge, brand, shortId },
	token,
}) => (
	(dispatch) => {
		dispatch({
			type: actionsName.REMOVE_BEVERAGE_GALLERY_PENDING,
		});

		const { method, path } = constants.api_endpoints.remove_gallery;

		fetch(constants.servers.data + path, {
			method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				badge,
				brand,
				files,
				id,
				shortId,
			}),
		})
			.then(({ status }) => {
				if (status === 200) {
					dispatch({
						type: actionsName.REMOVE_BEVERAGE_GALLERY_FULFILLED,
						payload: { id },
					});
				} else {
					throw new Error('Something went wrong');
				}
			})
			.catch(() => {
				dispatch({
					type: actionsName.REMOVE_BEVERAGE_GALLERY_REJECTED,
				});
			});
	}
);

export default removeBeverageGallery;
