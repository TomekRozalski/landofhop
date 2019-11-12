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
import { Button } from 'elements';
import { constants } from 'utils';
import {
	getBeveragesList as getBeveragesListAction,
	saveBeverageCover as saveBeverageCoverAction,
} from 'store/actions';
import { DragableArea, SubSection } from '../elements/common';
import { CurrentCover, Preview, Wrapper } from '../elements/cover';

const Cover = ({
	getBeveragesList,
	isError,
	isLoading,
	params,
	saveBeverageCover,
	savedBeverage: {
		container,
		id,
	},
	setErrors,
}) => {
	const [fileToPreview, setFileToPreview] = useState(null);
	const [fileToRequest, setFileToRequest] = useState(null);

	const { token } = useContext(AuthenticationContext);
	const { notify } = useContext(NotificationContext);

	if (isError) {
		notify({
			id: 'cover.fetchFailed',
			type: constants.notify.type.error,
		});

		return null;
	}

	const { getRootProps, getInputProps } = useDropzone({
		accept: ['image/jpg', 'image/jpeg'],
		minSize: 50 * 1024,
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

		saveBeverageCover({
			file: fileToRequest,
			id,
			params,
			token,
		})
			.then(() => {
				setFileToPreview(null);
				setFileToRequest(null);
				getBeveragesList();
			});
	};

	return (
		<Wrapper>
			<SubSection
				position="cover"
				title="dashboard.updateBeverageImages.cover"
			/>
			<DragableArea
				container={container}
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
	getBeveragesList: func.isRequired,
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
	getBeveragesList: getBeveragesListAction,
	saveBeverageCover: saveBeverageCoverAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
