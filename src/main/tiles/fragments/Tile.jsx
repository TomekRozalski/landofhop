import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getNameByLanguage } from 'utils/helpers';
import { NoImage } from './index';

// interface LinkTypes {
// 	blur: number
// 	image: string | boolean | null
// 	size: string
// }

const StyledLink = styled(Link)`
	display: block;
	width: 100%;
	height: ${({ size }) => (size === 'l' ? 500 : 300)}px;
	${({ image }) => (image && `
		background-image: url(${image});
		background-size: 100% 100%;
		background-repeat: no-repeat;
	`)}
	transition: filter .1s linear, opacity .2s linear;
	transform: scale(1);
	transition: transform .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
	position: relative;

	${({ blur }) => (blur ? `
		filter: blur(15px);
		opacity: .5;
	` : `
		filter: blur(0);
		opacity: 1;
	`)}

	&:hover {
		transform: scale(0.9);
		z-index: 100;
	}
`;

const Hidden = styled.span`
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
	position: absolute;
`;

// interface TileTypes extends BeverageBasicInfo {
// 	language: Languages
// }

const Tile = ({
	badge,
	brand: {
		badge: brandBadge,
		name: brandName,
	},
	name,
	language,
	short_id,
}) => {
	const [blur, setBlur] = useState(true);
	const [image, setImage] = useState(null);
	const [size, setSize] = useState('l');
	const [title, setTitle] = useState('');

	const smallImage = new Image();
	const largeImage = new Image();

	const smallImageLoaded = () => {
		switch (smallImage.height) {
		case 100:
		default:
			setSize('l');
			break;
		}

		setImage(smallImage.src);
		loadLarge();
	};

	const wrongImagePath = () => {
		setImage(false);
		setBlur(false);
	};

	const loadSmall = () => {
		const imagePath = `/img/${brandBadge}/${short_id}/${badge}/covers/glance.jpg`;
		smallImage.src = imagePath;

		smallImage.addEventListener('load', smallImageLoaded);
		smallImage.addEventListener('error', wrongImagePath);
	};

	const largeImageLoaded = () => {
		setImage(largeImage.src);
		setBlur(false);
	};

	const loadLarge = () => {
		const imageType = window.devicePixelRatio > 1 ? 'retina' : 'regular';
		const imagePath = `/img/${brandBadge}/${short_id}/${badge}/covers/${imageType}.jpg`;
		largeImage.src = imagePath;

		largeImage.addEventListener('load', largeImageLoaded);
	};

	useEffect(() => {
		loadSmall();

		const parsedBeverageName = getNameByLanguage({ values: name, language });
		const parsedBrandName = getNameByLanguage({ values: brandName, language });
		setTitle(`${parsedBeverageName}, ${parsedBrandName}`);

		return () => {
			smallImage.removeEventListener('load', smallImageLoaded);
			smallImage.removeEventListener('error', wrongImagePath);
			largeImage.removeEventListener('load', largeImageLoaded);
		};
	}, []);

	return (
		<li>
			<StyledLink
				image={image || null}
				blur={blur ? 1 : 0}
				size={size}
				to={`details/${short_id}/${brandBadge}/${badge}`}
			>
				<NoImage image={image} />
				<Hidden>{title}</Hidden>
			</StyledLink>
		</li>
	);
};

export default Tile;
