import React, { useContext, useEffect, useState } from 'react';
import {
	bool,
	func,
	number,
	shape,
	string,
} from 'prop-types';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { FormattedMessage } from 'react-intl';

import { AuthenticationContext, NotificationContext } from 'config';
import { constants } from 'utils';
import { Button } from 'elements';
import {
	removeBeverageGallery as removeBeverageGalleryAction,
	saveImagesBeverageGallery as saveImagesBeverageGalleryAction,
} from 'store/actions';
import { DragableArea, SubSection } from '../elements/common';
import { SavedImagesWrapper, ThumbnailList, Wrapper } from '../elements/gallery';

const Gallery = ({
	isError,
	isLoading,
	params,
	removeBeverageGallery,
	savedBeverage: {
		gallery,
		id,
	},
	saveImagesBeverageGallery,
	setErrors,
}) => {
	const [filesToPreview, setFilesToPreview] = useState([]);
	const [filesToRequest, setFilesToRequest] = useState([]);
	const [savedImages, setSavedImages] = useState(false);

	const { token } = useContext(AuthenticationContext);
	const { notify } = useContext(NotificationContext);

	if (isError) {
		notify({
			id: 'gallery.fetchFailed',
			type: constants.notify.type.error,
		});

		return null;
	}

	const { getRootProps, getInputProps } = useDropzone({
		accept: ['image/jpg', 'image/jpeg'],
		minSize: 100 * 1024,
		maxSize: 700 * 1024,
		onDrop: (acceptedFiles, rejectedFiles) => {
			if (rejectedFiles.length) {
				setErrors(rejectedFiles.map(({ name, size, type }) => ({
					name, size, type,
				})));
			} else {
				setErrors([]);
			}

			setFilesToRequest(acceptedFiles);
			setFilesToPreview(
				acceptedFiles.map(file => ({ ...file, preview: URL.createObjectURL(file) })),
			);
		},
	});

	useEffect(() => {
		if (!gallery) {
			setSavedImages(false);
		} else {
			setSavedImages(
				new Array(gallery).fill('').map((value, i) => {
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
	}, [gallery]);

	useEffect(() => () => {
		filesToPreview.forEach(file => URL.revokeObjectURL(file.preview));
	}, [filesToPreview]);

	const onRemoveImages = (e) => {
		e.preventDefault();
		setFilesToPreview([]);

		removeBeverageGallery({
			files: savedImages.length,
			id,
			params,
			token,
		});
	};

	const onSaveImages = (e) => {
		e.preventDefault();

		saveImagesBeverageGallery({
			files: filesToRequest,
			id,
			params,
			token,
		});
	};

	return (
		<Wrapper>
			<SubSection title="dashboard.updateBeverageImages.gallery" />
			{ savedImages.length
				? (
					<>
						<SavedImagesWrapper>
							<ThumbnailList files={savedImages} />
						</SavedImagesWrapper>
						<Button
							disabled={!savedImages}
							isSubmitting={savedImages && isLoading}
							onClick={onRemoveImages}
							resign
							wide
						>
							<FormattedMessage id="dashboard.remove" />
						</Button>
					</>
				) : (
					<>
						<DragableArea getInputProps={getInputProps} getRootProps={getRootProps} type="gallery">
							{ filesToPreview.length > 0 && <ThumbnailList files={filesToPreview} /> }
						</DragableArea>
						<Button
							disabled={!filesToRequest.length}
							isSubmitting={!savedImages && isLoading}
							onClick={onSaveImages}
							wide
						>
							<FormattedMessage id="dashboard.addNew" />
						</Button>
					</>
				)
			}
		</Wrapper>
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
	savedBeverage: shape({
		container: shape({
			type: string.isRequired,
			unit: string.isRequired,
			value: number.isRequired,
		}).isRequired,
		id: string.isRequired,
		gallery: number,
		cap: bool,
	}).isRequired,
	saveImagesBeverageGallery: func.isRequired,
	setErrors: func.isRequired,
};

const mapStateToProps = ({ dashboard }) => ({
	isError: dashboard.images.gallery.isError,
	isLoading: dashboard.images.gallery.isLoading,
});

const mapDispatchToProps = {
	removeBeverageGallery: removeBeverageGalleryAction,
	saveImagesBeverageGallery: saveImagesBeverageGalleryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
