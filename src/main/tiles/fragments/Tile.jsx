import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { timingFunctions } from 'utils/theme';
import { beverageBasics } from '../utils';

const StyledLink = styled(Link)`
	display: block;
	width: 100%;

	transform: scale(1);
	transition: transform ${timingFunctions.spring};
	position: relative;

	&:hover {
		transform: scale(0.9);
		z-index: 100;
	}
`;

const Tile = ({
	badge,
	brand: {
		badge: brandBadge,
		name: brandName,
	},
	name,
	shortId,
}) => {
	const { language } = useContext(LanguageContext);
	const { value: formattedName } = getNameByLanguage({ values: name, language });
	const { value: formattedBrand } = getNameByLanguage({ values: brandName, language });

	return (
		<li>
			<StyledLink to={`details/${shortId}/${brandBadge}/${badge}`}>
				<img
					srcSet={`
						/img/${brandBadge}/${badge}/${shortId}/cover/x1.jpg,
						/img/${brandBadge}/${badge}/${shortId}/cover/x2.jpg 2x,
					`}
					src={`/img/${brandBadge}/${badge}/${shortId}/cover/x1.jpg`}
					alt={`${formattedName}, ${formattedBrand}`}
				/>
			</StyledLink>
		</li>
	);
};

Tile.propTypes = beverageBasics;

export default Tile;
