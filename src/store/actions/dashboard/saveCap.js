import { constants, serverCall } from 'utils';
import actionsName from '../../actionsName';

const saveCap = ({
	fileToRequest,
	id,
	params,
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

			serverCall({
				type: constants.api_endpoints.save_cap,
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
