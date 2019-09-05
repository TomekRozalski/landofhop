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

import { AppErrorContext, AuthenticationContext } from 'config';
import { Button } from 'elements';
import { saveBeverageCover as saveBeverageCoverAction } from 'store/actions';
import { DragableArea, SubSection } from '../elements/common';
import { CurrentCover, Preview, Wrapper } from '../elements/cover';

const Cover = ({
	isError,
	isLoading,
	params,
	saveBeverageCover,
	savedBeverage,
	setErrors,
}) => {
	const [fileToPreview, setFileToPreview] = useState(null);
	const [fileToRequest, setFileToRequest] = useState(null);

	const { token } = useContext(AuthenticationContext);
	const { setAppError } = useContext(AppErrorContext);

	if (isError) {
		setAppError('appError.fetchFailed.imageGallery');
		return null;
	}

	const { getRootProps, getInputProps } = useDropzone({
		accept: ['image/jpg', 'image/jpeg'],
		minSize: 150 * 1024,
		maxSize: 800 * 1024,
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

	useEffect(() => () => {
		if (fileToPreview) {
			URL.revokeObjectURL(fileToPreview.preview);
		}
	}, [fileToPreview]);

	const onSaveImages = (e) => {
		e.preventDefault();

		saveBeverageCover({ file: fileToRequest, params, token })
			.then(() => {
				setFileToPreview(null);
				setFileToRequest(null);
			});
	};

	return (
		<Wrapper>
			<SubSection
				position="cover"
				title="dashboard.updateBeverageImages.cover"
			/>
			<DragableArea
				container={savedBeverage.container}
				getInputProps={getInputProps}
				getRootProps={getRootProps}
			>
				{ fileToPreview
					? <Preview file={fileToPreview} />
					: <CurrentCover params={params} />
				}
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

Cover.propTypes = {
	isError: bool.isRequired,
	isLoading: bool.isRequired,
	params: shape({
		badge: string.isRequired,
		brand: string.isRequired,
		shortId: string.isRequired,
	}).isRequired,
	saveBeverageCover: func.isRequired,
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
	setErrors: func.isRequired,
};

const mapStateToProps = ({ dashboard }) => ({
	isError: dashboard.images.cover.isError,
	isLoading: dashboard.images.cover.isLoading,
});

const mapDispatchToProps = {
	saveBeverageCover: saveBeverageCoverAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
