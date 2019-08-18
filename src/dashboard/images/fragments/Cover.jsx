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
import { saveBeverageCover as saveBeverageCoverAction } from 'store/actions';
import { ErrorBox, SubmitButton } from '../elements/common';
import { CurrentCover, DragableArea, Preview } from '../elements/cover';

import { DragAndDrop } from '../elements/icons';

const Cover = ({
	isError,
	isLoading,
	params,
	saveBeverageCover,
}) => {
	const [errors, setErrors] = useState([]);
	const [fileToPreview, setFileToPreview] = useState(null);
	const [fileToRequest, setFileToRequest] = useState(null);

	const { token } = useContext(AuthenticationContext);
	const { setAppError } = useContext(AppErrorContext);

	if (isError) {
		setAppError('appError.fetchFailed.imageGallery');
		return null;
	}

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
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

	useEffect(() => () => {
		if (fileToPreview) {
			URL.revokeObjectURL(fileToPreview.preview);
		}
	}, [fileToPreview]);

	const onSaveImages = (e) => {
		e.preventDefault();

		saveBeverageCover({ fileToRequest, params, token });
	};

	return (
		<>
			<DragableArea
				{...getRootProps()}
				isDragActive={isDragActive}
			>
				<input {...getInputProps()} />
				{ !fileToPreview && (
					<>
						<DragAndDrop />
						<CurrentCover params={params} />
					</>
				) }
				{ fileToPreview && <Preview file={fileToPreview} /> }
			</DragableArea>
			{ errors.length > 0 && <ErrorBox errors={errors} /> }
			<SubmitButton
				disabled={!fileToRequest}
				isSubmitting={isLoading}
				onClick={onSaveImages}
				position={1}
			/>
		</>
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
};

const mapStateToProps = ({ dashboard }) => ({
	isError: dashboard.images.cover.isError,
	isLoading: dashboard.images.cover.isLoading,
});

const mapDispatchToProps = {
	saveBeverageCover: saveBeverageCoverAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
