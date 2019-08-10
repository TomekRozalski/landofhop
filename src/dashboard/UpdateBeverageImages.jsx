import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { FormSection, MainHeader } from 'dashboard/elements';
import { DragableArea, ErrorBox, ThumbnailList } from 'dashboard/elements/dropzone';
import { DragAndDrop } from 'elements/icons';

const UpdateBeverageImages = ({ match }) => {
	const [errors, setErrors] = useState([]);
	const [files, setFiles] = useState([]);

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

			setFiles(acceptedFiles.map(file => ({ ...file, preview: URL.createObjectURL(file) })));
		},
	});

	useEffect(() => () => {
		files.forEach(file => URL.revokeObjectURL(file.preview));
	}, [files]);

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
