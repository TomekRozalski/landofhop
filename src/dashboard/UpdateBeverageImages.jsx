import React, { useContext, useEffect, useState } from 'react';
import {
	bool,
	func,
	shape,
	string,
} from 'prop-types';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';

import { AppErrorContext, AuthenticationContext } from 'config';
import {
	getBeverageDetails as getBeverageDetailsAction,
	updateGalleryCount as updateGalleryCountAction,
} from 'store/actions';
import { beverageDetails } from 'main/details/utils';
import { Spinner } from 'elements';
import saveImagesBeverageGallery from 'dashboard/utils/api/saveImagesBeverageGallery';
import { FormSection, MainHeader, SubmitButton } from 'dashboard/elements';
import { DragableArea, ErrorBox, ThumbnailList } from 'dashboard/elements/dropzone';
import { DragAndDrop } from 'elements/icons';

const UpdateBeverageImages = ({
	getBeverageDetails,
	isError,
	isLoading,
	match: { params },
	savedBeverage,
	updateGalleryCount,
}) => {
	const [errors, setErrors] = useState([]);
	const [filesToPreview, setFilesToPreview] = useState([]);
	const [filesToRequest, setFilesToRequest] = useState([]);

	const { token } = useContext(AuthenticationContext);
	const { setAppError } = useContext(AppErrorContext);

	if (isError) {
		setAppError('appError.fetchFailed.beverageDetails');
		return null;
	}

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

	useEffect(() => {
		if (!savedBeverage) {
			getBeverageDetails(params);
		}
	}, [savedBeverage]);

	const saveImage = (e) => {
		e.preventDefault();

		saveImagesBeverageGallery({ filesToRequest, params, token })
			.then((files) => {
				updateGalleryCount({ files, id: savedBeverage.id, token });
			});
	};

	if (!savedBeverage || isLoading) {
		return <Spinner center />;
	}

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
	getBeverageDetails: func.isRequired,
	isError: bool.isRequired,
	isLoading: bool.isRequired,
	match: shape({
		params: shape({
			badge: string.isRequired,
			brand: string.isRequired,
			shortId: string.isRequired,
		}),
	}).isRequired,
	savedBeverage: beverageDetails,
	updateGalleryCount: func.isRequired,
};

UpdateBeverageImages.defaultProps = {
	savedBeverage: null,
};

const mapStateToProps = ({ beverages }, { match: { params } }) => ({
	isError: beverages.details.isError,
	isLoading: beverages.details.isLoading,
	savedBeverage: beverages.details.list.find(beverage => (
		beverage.badge === params.badge
		&& beverage.label.general.brand.badge === params.brand
		&& beverage.shortId === params.shortId
	)),
});

const mapDispatchToProps = {
	getBeverageDetails: getBeverageDetailsAction,
	updateGalleryCount: updateGalleryCountAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBeverageImages);
