import React, { useContext, useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { constants } from 'utils';
import { AuthenticationContext } from 'config';
import { FormSection, MainHeader, SubmitButton } from 'dashboard/elements';
import { DragableArea, ErrorBox, ThumbnailList } from 'dashboard/elements/dropzone';
import { DragAndDrop } from 'elements/icons';

const UpdateBeverageImages = ({ match }) => {
	const [errors, setErrors] = useState([]);
	const [filesToPreview, setFilesToPreview] = useState([]);
	const [filesToRequest, setFilesToRequest] = useState([]);

	const { token } = useContext(AuthenticationContext);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: ['image/jpg', 'image/jpeg'],
		minSize: 100 * 1024,
		maxSize: 500 * 1024,
		onDrop: (acceptedFiles, rejectedFiles) => {
			if (rejectedFiles.length) {
				setErrors(rejectedFiles.map(({ name, size, type }) => ({
					name, size, type,
				})));
			}

			setFilesToRequest(acceptedFiles);
			setFilesToPreview(
				acceptedFiles.map(file => ({ ...file, preview: URL.createObjectURL(file) })),
			);
		},
	});

	useEffect(() => () => {
		filesToPreview.forEach(file => URL.revokeObjectURL(file.preview));
	}, [filesToPreview]);

	const saveImage = (e) => {
		e.preventDefault();

		const formData = new FormData();
		filesToRequest.forEach((image) => {
			formData.append('image', image);
		});

		const { badge, brand, shortId } = match.params;
		const endpoint = `${constants.servers.main}${constants.api_endpoints.images_beverage_gallery_save}${shortId}/${brand}/${badge}`;

		fetch(endpoint, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		})
			.then((res) => {
				console.log('res', res);
			})
			.catch((err) => {
				console.log('err', err);
			});
	};

	return (
		<>
			<MainHeader title="dashboard.updateBeverageImages.title" />
			<FormSection
				title="dashboard.updateBeverageImages.gallery.title"
				description="dashboard.updateBeverageImages.gallery.description"
			>
				<DragableArea
					{...getRootProps()}
					isDragActive={isDragActive}
				>
					<input {...getInputProps()} />
					<DragAndDrop />
					{ filesToPreview.length > 0 && <ThumbnailList files={filesToPreview} /> }
				</DragableArea>
				{ errors.length > 0 && <ErrorBox errors={errors} /> }
				<SubmitButton
					column={5}
					disabled={!filesToRequest.length}
					isSubmitting={false}
					onClick={saveImage}
				/>
			</FormSection>
		</>
	);
};

UpdateBeverageImages.propTypes = {
	match: shape({
		params: shape({
			badge: string.isRequired,
			brand: string.isRequired,
			shortId: string.isRequired,
		}),
	}).isRequired,
};

export default UpdateBeverageImages;
