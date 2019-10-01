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
import { removeCap as removeCapAction, saveCap as saveCapAction } from 'store/actions';
import { DragableArea, SubSection } from '../elements/common';
import { CurrentCap, Preview, Wrapper } from '../elements/cap';

const Cap = ({
	isError,
	isLoading,
	params,
	removeCap,
	saveCap,
	savedBeverage: {
		cap,
		id,
	},
	setErrors,
}) => {
	const [fileToPreview, setFileToPreview] = useState(null);
	const [fileToRequest, setFileToRequest] = useState(null);
	const [savedImage, setSavedImage] = useState(false);

	const { token } = useContext(AuthenticationContext);
	const { notify } = useContext(NotificationContext);

	if (isError) {
		notify({
			id: 'appError.fetchFailed.imageGallery', // @ToDo: change
			type: 'danger',
		});
		return null;
	}

	const { getRootProps, getInputProps } = useDropzone({
		accept: ['image/jpg', 'image/jpeg'],
		minSize: 30 * 1024,
		maxSize: 500 * 1024,
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
		if (!cap) {
			setSavedImage(false);
		} else {
			const { badge, brand, shortId } = params;

			setSavedImage({
				path: '2x.jpg',
				preview: `${constants.servers.images}${brand}/${badge}/${shortId}/cap/jpg/2x.jpg`,
			});
		}
	}, [cap]);

	useEffect(() => () => {
		if (fileToPreview) {
			URL.revokeObjectURL(fileToPreview.preview);
		}
	}, [fileToPreview]);

	const onSaveImage = (e) => {
		e.preventDefault();

		saveCap({
			fileToRequest,
			id,
			params,
			token,
		})
			.then(() => {
				setFileToPreview(null);
				setFileToRequest(null);
			});
	};

	const onRemoveImage = (e) => {
		e.preventDefault();

		removeCap({ id, params, token });
	};

	return (
		<Wrapper>
			<SubSection
				position="cap"
				title="dashboard.updateBeverageImages.cap"
			/>
			{ savedImage
				? (
					<>
						<CurrentCap params={params} />
						<Button
							isSubmitting={isLoading}
							onClick={onRemoveImage}
							resign
							wide
						>
							<FormattedMessage id="dashboard.remove" />
						</Button>
					</>
				) : (
					<>
						<DragableArea getRootProps={getRootProps} getInputProps={getInputProps}>
							{ fileToPreview && <Preview file={fileToPreview} /> }
						</DragableArea>
						<Button
							disabled={!fileToRequest}
							isSubmitting={isLoading}
							onClick={onSaveImage}
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

Cap.propTypes = {
	isError: bool.isRequired,
	isLoading: bool.isRequired,
	params: shape({
		badge: string.isRequired,
		brand: string.isRequired,
		shortId: string.isRequired,
	}).isRequired,
	removeCap: func.isRequired,
	saveCap: func.isRequired,
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
	isError: dashboard.images.cap.isError,
	isLoading: dashboard.images.cap.isLoading,
});

const mapDispatchToProps = {
	removeCap: removeCapAction,
	saveCap: saveCapAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cap);
