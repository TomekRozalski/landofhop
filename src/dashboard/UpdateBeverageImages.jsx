import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from 'utils/theme';
import { FormSection, MainHeader, Wrapper } from 'dashboard/elements';

const DragableArea = styled.section`
	grid-column: 1 / -1;
	min-height: 30rem;
	border: .5rem solid ${colors.gray[600]};
	
	
`;

const FileInput = styled.input.attrs({
	type: 'file',
})`
	display: none;
`;

const UpdateBeverageImages = ({ match }) => {
	const fileSelectedHandler = (e) => {
		console.log('-->', e.target.files);
	};

	return (
		<>
			<MainHeader title="dashboard.updateBeverageImages.title" />
			<FormSection
				title="dashboard.updateBeverageImages.gallery.title"
				description="dashboard.updateBeverageImages.gallery.description"
			>
				<DragableArea />
				<FileInput type="file" multiple="multiple" onChange={fileSelectedHandler} />
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
