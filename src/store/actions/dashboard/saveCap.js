import { constants } from 'utils';
import actionsName from '../../actionsName';

const saveCap = ({
	fileToRequest,
	id,
	params,
	token,
}) => (
	dispatch => (
		new Promise((resolve, reject) => {
			dispatch({
				type: actionsName.SAVE_CAP_PENDING,
			});

			const formData = new FormData();
			formData.append('badge', params.badge);
			formData.append('brand', params.brand);
			formData.append('id', id);
			formData.append('image', fileToRequest);
			formData.append('shortId', params.shortId);

			fetch(constants.servers.data + constants.api_endpoints.save_cap.path, {
				method: constants.api_endpoints.save_cap.method,
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: formData,
			})
				.then(({ status }) => {
					if (status === 200) {
						dispatch({
							type: actionsName.SAVE_CAP_FULFILLED,
							payload: { id },
						});
						resolve();
					} else {
						throw new Error('Something went wrong');
					}
				})
				.catch(() => {
					dispatch({
						type: actionsName.SAVE_CAP_REJECTED,
					});
					reject();
				});
		})
	)
);

export default saveCap;
