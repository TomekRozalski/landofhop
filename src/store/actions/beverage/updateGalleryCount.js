import { number, string } from 'prop-types';

import { constants } from 'utils';
import actionsName from '../../actionsName';

const updateGalleryCount = ({
	files,
	id,
	token,
}) => (
	dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.UPDATE_BEVERAGE_GALLERY_IMAGES_PENDING,
			});

			fetch(`${constants.servers.data}${constants.api_endpoints.beverage_update_gallery}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ files, id }),
			})
				.then((res) => {
					if (res.status !== 200) {
						throw new Error();
					}
					return res;
				})
				.then(res => res.json())
				.then((details) => {
					dispatch({
						type: actionsName.UPDATE_BEVERAGE_GALLERY_IMAGES_FULFILLED,
						payload: { files, id },
					});
					resolve(details);
				})
				.catch((err) => {
					dispatch({
						type: actionsName.UPDATE_BEVERAGE_GALLERY_IMAGES_REJECTED,
					});
					reject(err);
				});
		})
	)
);

updateGalleryCount.propTypes = {
	files: number,
	id: string.isRequired,
	token: string.isRequired,
};

updateGalleryCount.defaultProps = {
	files: 0,
};

export default updateGalleryCount;
