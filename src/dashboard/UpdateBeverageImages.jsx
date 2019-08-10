import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { constants } from 'utils';
import { FormSection, MainHeader, SubmitButton } from 'dashboard/elements';
import { DragableArea, ErrorBox, ThumbnailList } from 'dashboard/elements/dropzone';
import { DragAndDrop } from 'elements/icons';

const UpdateBeverageImages = ({ match }) => {
	const [errors, setErrors] = useState([]);
	const [files, setFiles] = useState([]);

	const [fullFiles, setFullFiles] = useState([]);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: ['image/jpg', 'image/jpeg'],
		minSize: 10 * 1024,
		maxSize: 100 * 1024,
		onDrop: (acceptedFiles, rejectedFiles) => {
			if (rejectedFiles.length) {
				setErrors(rejectedFiles.map(({ name, size, type }) => ({
					name, size, type,
				})));
			}

			setFullFiles(acceptedFiles);

			setFiles(acceptedFiles.map(file => ({ ...file, preview: URL.createObjectURL(file) })));
		},
	});

	useEffect(() => () => {
		files.forEach(file => URL.revokeObjectURL(file.preview));
	}, [files]);

	const saveImage = (e) => {
		e.preventDefault();

		const formData = new FormData();
		fullFiles.forEach((image) => {
			formData.append('image', image);
		});

		const endpoint = `${constants.servers.main}${constants.api_endpoints.images_beverage_gallery_save}`;

		fetch(endpoint, {
			method: 'POST',
			// headers: {
			// 'Content-Type': 'multipart/formdata',
			// Authorization: `Bearer ${token}`,
			// },
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
					{ files.length > 0 && <ThumbnailList files={files} /> }
				</DragableArea>
				{ errors.length > 0 && <ErrorBox errors={errors} /> }
				<SubmitButton
					column={5}
					disabled={!files.length}
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
