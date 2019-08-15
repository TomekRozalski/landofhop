import React, {
	useContext,
	useEffect,
	useState,
} from 'react';
import {
	bool,
	func,
	shape,
	string,
} from 'prop-types';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import get from 'lodash/get';

import { AuthenticationContext } from 'config';
import { constants } from 'utils';
import {
	updateGalleryCount as updateGalleryCountAction,
	removeBeverageGallery as removeBeverageGalleryAction,
} from 'store/actions';
import { beverageDetails } from 'main/details/utils';
import { saveImagesBeverageGallery } from '../utils/api';
import { ErrorBox, RemoveButton, SubmitButton } from '../elements/common';
import { DragableArea, SavedImagesWrapper, ThumbnailList } from '../elements/gallery';
import { DragAndDrop } from '../elements/icons';

const Gallery = ({
	isError,
	isLoading,
	params,
	removeBeverageGallery,
	savedBeverage,
	updateGalleryCount,
}) => {
	const [errors, setErrors] = useState([]);
	const [filesToPreview, setFilesToPreview] = useState([]);
	const [filesToRequest, setFilesToRequest] = useState([]);
	const [savedImages, setSavedImages] = useState(false);

	const { token } = useContext(AuthenticationContext);

	useEffect(() => {
		const images = get(savedBeverage, 'editorial.images');

		if (!images) {
			setSavedImages(false);
		} else {
			setSavedImages(
				new Array(images).fill('').map((value, i) => {
					const validIndex = i + 1;
					const imageName = validIndex < 10 ? `0${validIndex}.jpg` : `${validIndex}.jpg`;
					const { badge, brand, shortId } = params;

					return {
						path: imageName,
						preview: `${constants.servers.images}${brand}/${badge}/${shortId}/container/jpg/2x/${imageName}`,
					};
				}),
			);
		}
	}, [savedBeverage]);

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


	const onRemoveImages = (e) => {
		e.preventDefault();

		removeBeverageGallery({ files: savedImages.length, params, token })
			.then(() => {
				updateGalleryCount({ id: savedBeverage.id, token });
			});
	};

	const onSaveImages = (e) => {
		e.preventDefault();

		saveImagesBeverageGallery({ filesToRequest, params, token })
			.then((files) => {
				updateGalleryCount({ files, id: savedBeverage.id, token });
			});
	};

	return (
		<>
			{ savedImages
				? (
					<SavedImagesWrapper>
						<ThumbnailList files={savedImages} />
					</SavedImagesWrapper>
				) : (
					<>
						<DragableArea
							{...getRootProps()}
							isDragActive={isDragActive}
						>
							<input {...getInputProps()} />
							<DragAndDrop />
							{ filesToPreview.length > 0 && <ThumbnailList files={filesToPreview} /> }
						</DragableArea>
						{ errors.length > 0 && <ErrorBox errors={errors} /> }
					</>
				)
			}
			<RemoveButton
				disabled={!savedImages}
				isSubmitting={savedImages && isLoading}
				onClick={onRemoveImages}
			/>
			<SubmitButton
				disabled={!filesToRequest.length}
				isSubmitting={!savedImages && isLoading}
				onClick={onSaveImages}
			/>
		</>
	);
};

Gallery.propTypes = {
	isError: bool.isRequired,
	isLoading: bool.isRequired,
	params: shape({
		badge: string.isRequired,
		brand: string.isRequired,
		shortId: string.isRequired,
	}).isRequired,
	removeBeverageGallery: func.isRequired,
	savedBeverage: beverageDetails.isRequired,
	updateGalleryCount: func.isRequired,
};

const mapStateToProps = ({ dashboard }) => ({
	isError: dashboard.images.gallery.isError,
	isLoading: dashboard.images.gallery.isLoading,
});

const mapDispatchToProps = {
	removeBeverageGallery: removeBeverageGalleryAction,
	updateGalleryCount: updateGalleryCountAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
