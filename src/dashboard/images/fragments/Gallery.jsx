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
import get from 'lodash/get';
import { FormattedMessage } from 'react-intl';

import { AppErrorContext, AuthenticationContext } from 'config';
import { constants } from 'utils';
import { Button } from 'elements';
import {
	updateGalleryCount as updateGalleryCountAction,
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
	updateGalleryCount,
}) => {
	const [filesToPreview, setFilesToPreview] = useState([]);
	const [filesToRequest, setFilesToRequest] = useState([]);
	const [savedImages, setSavedImages] = useState(false);

	const { token } = useContext(AuthenticationContext);
	const { setAppError } = useContext(AppErrorContext);

	if (isError) {
		setAppError('appError.fetchFailed.imageGallery');
		return null;
	}

	const { getRootProps, getInputProps } = useDropzone({
		accept: ['image/jpg', 'image/jpeg'],
		minSize: 100 * 1024,
		maxSize: 500 * 1024,
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

		removeBeverageGallery({ files: savedImages.length, params, token })
			.then(() => {
				updateGalleryCount({ id, token });
			});
	};

	const onSaveImages = (e) => {
		e.preventDefault();

		saveImagesBeverageGallery({ filesToRequest, params, token })
			.then((files) => {
				updateGalleryCount({ files, id, token });
			});
	};

	return (
		<Wrapper>
			<SubSection title="dashboard.updateBeverageImages.gallery" />
			{ savedImages
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
						<DragableArea getInputProps={getInputProps} getRootProps={getRootProps}>
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
		id: string.isRequired,
		gallery: number,
		cap: bool,
	}).isRequired,
	saveImagesBeverageGallery: func.isRequired,
	setErrors: func.isRequired,
	updateGalleryCount: func.isRequired,
};

const mapStateToProps = ({ dashboard }) => ({
	isError: dashboard.images.gallery.isError,
	isLoading: dashboard.images.gallery.isLoading,
});

const mapDispatchToProps = {
	removeBeverageGallery: removeBeverageGalleryAction,
	saveImagesBeverageGallery: saveImagesBeverageGalleryAction,
	updateGalleryCount: updateGalleryCountAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
