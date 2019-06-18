import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { DeviceContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { timingFunctions } from 'utils/theme';
import { beverageBasics } from '../utils';
import { NoImage } from './index';

const StyledLink = styled(Link)`
	display: block;
	width: 100%;
	height: ${({ size }) => {
		if (size === 'bottle-l') {
			return 500;
		}
		if (size === 'bottle-sm') {
			return 446;
		}
		if (size === 'can-l') {
			return 363;
		}
		if (size === 'can-sm') {
			return 248;
		}

		return 'auto';
	}}px;
	${({ image }) => (image && `
		background-image: url(${image});
		background-size: 100% 100%;
		background-repeat: no-repeat;
	`)}
	transition: filter .1s linear, opacity .2s linear;
	transform: scale(1);
	transition: transform ${timingFunctions.spring};
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

const Tile = ({
	badge,
	brand: {
		badge: brandBadge,
		name: brandName,
	},
	name,
	shortId,
}) => {
	const { pixelRatio } = useContext(DeviceContext);
	const { language } = useContext(LanguageContext);

	const coversPath = `/img/${brandBadge}/${badge}/${shortId}/cover`;

	const [blur, setBlur] = useState(true);
	const [image, setImage] = useState(null);
	const [size, setSize] = useState('bottle-l');
	const [title, setTitle] = useState('');

	const smallImage = new Image();
	const largeImage = new Image();

	const largeImageLoaded = () => {
		setImage(largeImage.src);
		setBlur(false);
	};

	const loadLarge = () => {
		const imagePath = `${coversPath}/${pixelRatio}.jpg`;
		largeImage.src = imagePath;

		largeImage.addEventListener('load', largeImageLoaded);
	};

	const smallImageLoaded = () => {
		switch (smallImage.height) {
		case 50:
			setSize('can-sm');
			break;
		case 73:
			setSize('can-l');
			break;
		case 89:
			setSize('bottle-sm');
			break;
		case 100:
		default:
			setSize('bottle-l');
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
		const imagePath = `${coversPath}/glance.jpg`;
		smallImage.src = imagePath;

		smallImage.addEventListener('load', smallImageLoaded);
		smallImage.addEventListener('error', wrongImagePath);
	};

	useEffect(() => {
		loadSmall();

		const {
			language: nameLanguage,
			value: nameValue,
		} = getNameByLanguage({ values: name, language });

		const nameLangAttribute = nameLanguage && nameLanguage !== language
			? nameLanguage
			: null;
		const formattedName = nameLangAttribute
			? <span lang={nameLangAttribute}>{nameValue}</span>
			: nameValue;

		const {
			language: brandLanguage,
			value: brandValue,
		} = getNameByLanguage({ values: brandName, language });

		const brandLangAttribute = brandLanguage && brandLanguage !== language
			? brandLanguage
			: null;
		const formattedBrand = brandLangAttribute
			? <span lang={brandLangAttribute}>{brandValue}</span>
			: brandValue;

		setTitle(
			<>
				{formattedName}
				{', '}
				{formattedBrand}
			</>,
		);

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
				to={`details/${shortId}/${brandBadge}/${badge}`}
			>
				<NoImage image={!!image} />
				<Hidden>{title}</Hidden>
			</StyledLink>
		</li>
	);
};

Tile.propTypes = beverageBasics;

export default Tile;
