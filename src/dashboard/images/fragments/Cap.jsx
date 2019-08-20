import React, { useContext, useEffect, useState } from 'react';
import {
	bool,
	func,
	shape,
	string,
} from 'prop-types';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { FormattedMessage } from 'react-intl';
import get from 'lodash/get';

import { AppErrorContext, AuthenticationContext } from 'config';
import { Button } from 'elements';
import { constants } from 'utils';
import { beverageDetails } from 'main/details/utils';
import { DragableArea, SubSection } from '../elements/common';
import { Preview, Wrapper } from '../elements/cap';

const Cap = ({
	isError,
	isLoading,
	params,
	saveBeverageCover,
	savedBeverage,
	setErrors,
}) => {
	const [fileToPreview, setFileToPreview] = useState(null);
	const [fileToRequest, setFileToRequest] = useState(null);
	const [savedImage, setSavedImage] = useState(false);

	const { token } = useContext(AuthenticationContext);
	const { setAppError } = useContext(AppErrorContext);

	if (isError) {
		setAppError('appError.fetchFailed.imageGallery');
		return null;
	}

	const { getRootProps, getInputProps } = useDropzone({
		accept: ['image/png'],
		minSize: 200 * 1024,
		maxSize: 3000 * 1024,
		multiple: false,
		onDrop: (acceptedFiles, rejectedFiles) => {
			if (rejectedFiles.length) {
				setErrors(rejectedFiles.map(({ name, size, type }) => ({
					name, size, type,
				})));
			} else {
				setErrors([]);

				setFileToRequest(acceptedFiles[0]);
				setFileToPreview({ ...acceptedFiles[0], preview: URL.createObjectURL(acceptedFiles[0]) });
			}
		},
	});

	useEffect(() => {
		const images = get(savedBeverage, 'editorial.cap');

		if (!images) {
			setSavedImage(false);
		} else {
			const { badge, brand, shortId } = params;

			setSavedImage({
				path: '2x.jpg',
				preview: `${constants.servers.images}${brand}/${badge}/${shortId}/cap/jpg/2x.jpg`,
			});
		}
	}, [savedBeverage]);

	useEffect(() => () => {
		if (fileToPreview) {
			URL.revokeObjectURL(fileToPreview.preview);
		}
	}, [fileToPreview]);

	const onSaveImages = (e) => {
		e.preventDefault();

		saveBeverageCover({ fileToRequest, params, token })
			.then(() => {
				setFileToPreview(null);
				setFileToRequest(null);
			});
	};

	return (
		<Wrapper>
			<SubSection
				position="cap"
				title="dashboard.updateBeverageImages.cap"
			/>
			<DragableArea getRootProps={getRootProps} getInputProps={getInputProps}>
				{ fileToPreview && <Preview file={fileToPreview} /> }
			</DragableArea>
			<Button
				disabled={!fileToRequest}
				isSubmitting={isLoading}
				onClick={onSaveImages}
				wide
			>
				<FormattedMessage id="dashboard.addNew" />
			</Button>
		</Wrapper>
	);
};

Cap.propTypes = {
	isError: bool.isRequired,
	isLoading: bool.isRequired,
	params: shape({
		badge: string.isRequired,
		brand: string.isRequired,
		shortId: string.isRequired,
	}).isRequired,
	saveBeverageCover: func.isRequired,
	savedBeverage: beverageDetails.isRequired,
	setErrors: func.isRequired,
};

const mapStateToProps = ({ dashboard }) => ({
	isError: dashboard.images.cover.isError,
	isLoading: dashboard.images.cover.isLoading,
});

const mapDispatchToProps = {
	// saveBeverageCover: saveBeverageCoverAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cap);
