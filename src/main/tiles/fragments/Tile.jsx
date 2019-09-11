import React, { useContext, useMemo, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { DeviceContext, LanguageContext } from 'config';
import { constants, setContainerHeight } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import { colors, timingFunctions } from 'utils/theme';
import {
	Bottle,
	BrokenBottle,
	BrokenCan,
	Can,
} from 'elements/icons';
import { beverageBasics } from '../utils';

const bounce = () => keyframes`
	0% {
		top: -10px;
	}
	100% {
		top: 10px;
	}
`;

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

	.container-icon {
		position: relative;
		animation: ${bounce} .5s ease-in-out 0s infinite alternate;
	}
`;

const Image = styled.img`
	display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')};
	pointer-events: none;
`;

const Tile = ({
	columnIndex,
	data,
	rowIndex,
	style,
}) => {
	const index = rowIndex * 5 + columnIndex;

	if (!data[index]) {
		return null;
	}

	const [failure, setFailure] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const { language } = useContext(LanguageContext);
	const { webpSupport } = useContext(DeviceContext);

	const {
		badge,
		brand: {
			badge: brandBadge,
			name: brandName,
		},
		container,
		name,
		shortId,
	} = data[index];

	const { value: formattedName } = getNameByLanguage({ values: name, language });
	const { value: formattedBrand } = getNameByLanguage({ values: brandName, language });

	const Container = () => {
		if (container.type === 'bottle') {
			return <Bottle />;
		}

		if (container.type === 'can') {
			return <Can />;
		}

		return null;
	};

	const BrokenContainer = () => {
		if (container.type === 'bottle') {
			return <BrokenBottle />;
		}

		if (container.type === 'can') {
			return <BrokenCan />;
		}

		return null;
	};

	const coverPath = useMemo(() => `${constants.servers.images}${brandBadge}/${badge}/${shortId}/cover/${webpSupport ? 'webp' : 'jpg'}`, []);

	return (
		<li
			style={{
				...style,
				display: 'flex',
				alignItems: 'flex-end',
				paddingBottom: '10px',
				// left: style.left + (columnIndex ? (10 * columnIndex) : 0),
				// top: style.top + (rowIndex ? (10 * rowIndex) : 0),
			}}
		>
			<StyledLink height={setContainerHeight(container)} to={`details/${shortId}/${brandBadge}/${badge}`}>
				{ failure && <BrokenContainer /> }
				{ !failure && (
					<Image
						alt={`${formattedName}, ${formattedBrand}`}
						onError={() => setFailure(true)}
						onLoad={() => setLoaded(true)}
						isLoaded={loaded}
						srcSet={`
								${coverPath}/1x.${webpSupport ? 'webp' : 'jpg'},
								${coverPath}/2x.${webpSupport ? 'webp' : 'jpg'} 2x,
								${coverPath}/4x.${webpSupport ? 'webp' : 'jpg'} 4x,
							`}
						src={`${coverPath}/1x.${webpSupport ? 'webp' : 'jpg'}`}
					/>
				)}
				{ !loaded && !failure && <Container /> }
			</StyledLink>
		</li>
	);
};

Tile.propTypes = beverageBasics;

export default Tile;
