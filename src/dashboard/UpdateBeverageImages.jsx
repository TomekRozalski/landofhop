import React, { useCallback } from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

import { colors, fonts } from 'utils/theme';
import { FormSection, MainHeader, Wrapper } from 'dashboard/elements';
import { DragAndDrop } from 'elements/icons';

const DragableArea = styled.section`
	grid-column: 1 / -1;
	min-height: 30rem;
	border: .5rem solid ${colors.gray[600]};
	transition: border .2s;
	padding: 1rem;
	cursor: pointer;
	position: relative;

	:hover,
	:focus {
		outline: none;
		border-color: ${colors.gray[400]};

		svg .dark {
			fill: ${colors.gray[400]};
		}
	}

	svg {
		height: 140px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.dark {
			fill: ${colors.gray[600]};
			transition: fill .2s;
		}

		.movable {
			transform: translate(${({ isDragActive }) => (isDragActive ? '224px, -104px' : '0, 0')});
			transition: transform .2s;
		}
	}
`;

const UpdateBeverageImages = ({ match }) => {
	const onDrop = useCallback((acceptedFiles) => {
		// Do something with the files
		console.log('acceptedFiles', acceptedFiles);
		console.log('-->', acceptedFiles[0].name);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<>
			<MainHeader title="dashboard.updateBeverageImages.title" />
			<FormSection
				title="dashboard.updateBeverageImages.gallery.title"
				description="dashboard.updateBeverageImages.gallery.description"
			>
				<DragableArea {...getRootProps()} isDragActive={isDragActive}>
					<input {...getInputProps()} />
					<DragAndDrop />
				</DragableArea>
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
