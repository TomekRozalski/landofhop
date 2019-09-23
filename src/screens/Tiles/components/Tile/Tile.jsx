import React, { useContext, useMemo, useState } from 'react';
import { arrayOf, number, shape } from 'prop-types';

import { DeviceContext, LanguageContext } from 'config';
import { constants, setContainerHeight } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import { beverageBasics } from 'utils/types';
import {
	BrokenContainer,
	Container,
	Image,
	Item,
	StyledLink,
} from './index';

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

	const coverPath = useMemo(() => `${constants.servers.images}${brandBadge}/${badge}/${shortId}/cover/${webpSupport ? 'webp' : 'jpg'}`);

	return (
		<Item style={style}>
			<StyledLink
				height={setContainerHeight(container)}
				to={`details/${shortId}/${brandBadge}/${badge}`}
			>
				{ failure && <BrokenContainer type={container.type} /> }
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
				{ !loaded && !failure && <Container type={container.type} /> }
			</StyledLink>
		</Item>
	);
};

Tile.propTypes = {
	columnIndex: number.isRequired,
	data: arrayOf(shape(beverageBasics)).isRequired,
	rowIndex: number.isRequired,
	style: shape({}).isRequired,
};

export default Tile;
