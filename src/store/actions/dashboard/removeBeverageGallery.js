import { constants, serverCall } from 'utils';
import actionsName from '../../actionsName';

const removeBeverageGallery = ({
	files,
	id,
	params: { badge, brand, shortId },
}) => (
	(dispatch) => {
		dispatch({
			type: actionsName.REMOVE_BEVERAGE_GALLERY_PENDING,
		});

		serverCall({
			type: constants.api_endpoints.remove_gallery,
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
