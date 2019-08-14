import { constants } from 'utils';

const saveImagesBeverageGallery = ({
	filesToRequest,
	params: { badge, brand, shortId },
	token,
}) => new Promise((resolve, reject) => {
	const formData = new FormData();
	filesToRequest.forEach((image) => {
		formData.append('image', image);
	});

	const endpoint = `${constants.servers.data}${constants.api_endpoints.images_beverage_gallery_save}${shortId}/${brand}/${badge}`;

	fetch(endpoint, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: formData,
	})
		.then(() => {
			resolve(filesToRequest.length);
		})
		.catch(reject);
});

export default saveImagesBeverageGallery;
