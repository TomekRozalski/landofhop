import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { colors, timingFunctions } from 'utils/theme';
import { Bottle, BrokenBottle } from 'elements/icons';
import { beverageBasics, setContainerHeight } from '../utils';

const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	width: 100%;
	height: ${({ height }) => (height || 300)}px;
	transform: scale(1);
	transition: transform ${timingFunctions.spring};
	position: relative;

	&:hover {
		transform: scale(0.9);
		z-index: 100;
	}

	svg {
		height: 30rem;
		margin: 5rem 0;

		path {
			fill: ${colors.gray[500]};
		}
	}
`;

const Tile = ({
	badge,
	brand: {
		badge: brandBadge,
		name: brandName,
	},
	container,
	name,
	shortId,
}) => {
	const [failure, setFailure] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const { language } = useContext(LanguageContext);
	const { value: formattedName } = getNameByLanguage({ values: name, language });
	const { value: formattedBrand } = getNameByLanguage({ values: brandName, language });

	return (
		<li>
			<StyledLink height={setContainerHeight(container)} to={`details/${shortId}/${brandBadge}/${badge}`}>
				{ failure ? <BrokenBottle /> : (
					<img
						alt={`${formattedName}, ${formattedBrand}`}
						onError={() => setFailure(true)}
						onLoad={() => setLoaded(true)}
						srcSet={`
								/img/${brandBadge}/${badge}/${shortId}/cover/x1.jpg,
								/img/${brandBadge}/${badge}/${shortId}/cover/x2.jpg 2x,
							`}
						src={`/img/${brandBadge}/${badge}/${shortId}/cover/x1.jpg`}
					/>
				)}
				{ !loaded && !failure && <Bottle /> }
			</StyledLink>
		</li>
	);
};

Tile.propTypes = beverageBasics;

export default Tile;
