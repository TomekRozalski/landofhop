import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

import { colors, fonts } from 'utils/theme';
import { FormSection, MainHeader } from 'dashboard/elements';
import { ErrorBox } from 'dashboard/elements/dropzone';
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
	const [errors, setErrors] = useState([]);
	const [files, setFiles] = useState([]);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: ['image/jpg', 'image/jpeg'],
		minSize: 10 * 1024,
		maxSize: 100 * 1024,
		onDrop: (acceptedFiles, rejectedFiles) => {
			if (rejectedFiles.length) {
				setErrors(rejectedFiles.map(({ name, size, type }) => ({
					name, size, type,
				})));
			}

			setFiles(acceptedFiles.map(file => ({ ...file, preview: URL.createObjectURL(file) })));
		},
	});

	useEffect(() => () => {
		files.forEach(file => URL.revokeObjectURL(file.preview));
	}, [files]);

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
					{
						files.map(file => (
							<div key={file.path}>
								<img alt={file.path} src={file.preview} />
							</div>
						))
					}
				</DragableArea>
				{ errors.length > 0 && <ErrorBox errors={errors} /> }
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
