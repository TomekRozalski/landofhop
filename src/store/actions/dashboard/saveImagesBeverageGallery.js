import { constants, serverCall } from 'utils';
import actionsName from '../../actionsName';

const saveImagesBeverageGallery = ({
	files,
	id,
	params: { badge, brand, shortId },
}) => (
	(dispatch) => {
		dispatch({
			type: actionsName.SAVE_BEVERAGE_GALLERY_PENDING,
		});

		const formData = new FormData();

		formData.append('badge', badge);
		formData.append('brand', brand);
		formData.append('id', id);
		files.forEach((image) => {
			formData.append('image', image);
		});
		formData.append('shortId', shortId);

		serverCall({
			type: constants.api_endpoints.save_gallery,
			body: formData,
		})
			.then(({ status }) => {
				if (status === 200) {
					dispatch({
						type: actionsName.SAVE_BEVERAGE_GALLERY_FULFILLED,
						payload: { files: files.length, id },
					});
				} else {
					throw new Error('Something went wrong');
				}
			})
			.catch(() => {
				dispatch({
					type: actionsName.SAVE_BEVERAGE_GALLERY_REJECTED,
				});
			});
	}
);

export default saveImagesBeverageGallery;
