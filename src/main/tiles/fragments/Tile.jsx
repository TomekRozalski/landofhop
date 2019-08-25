import React, {
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { DeviceContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import { colors, timingFunctions } from 'utils/theme';
import {
	Bottle,
	BrokenBottle,
	BrokenCan,
	Can,
} from 'elements/icons';
import { beverageBasics, setContainerHeight } from '../utils';

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
	badge,
	brand: {
		badge: brandBadge,
		name: brandName,
	},
	container,
	name,
	shortId,
}) => {
	const element = useRef();
	const [failure, setFailure] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [onScreen, setOnScreen] = useState(false);

	const { language } = useContext(LanguageContext);
	const { webpSupport } = useContext(DeviceContext);

	const { value: formattedName } = getNameByLanguage({ values: name, language });
	const { value: formattedBrand } = getNameByLanguage({ values: brandName, language });

	const Container = () => {
		if (container.type === 'bottle') {
			return <Bottle />
		}

		if (container.type === 'can') {
			return <Can />
		}
	}

	const BrokenContainer = () => {
		if (container.type === 'bottle') {
			return <BrokenBottle />
		}

		if (container.type === 'can') {
			return <BrokenCan />
		}
	}

	useEffect(() => {
		const imgOptions = {
			threshold: 0,
			rootMargin: '500px 0px',
		};

		const observer = new IntersectionObserver(([entry], elementObserver) => {
			if (!entry.isIntersecting) {
				return;
			}

			setOnScreen(true);
			elementObserver.unobserve(entry.target);
		}, imgOptions);

		observer.observe(element.current);

		return () => {
			observer.unobserve(element.current);
		};
	}, []);

	const coverPath = useMemo(() => `${constants.servers.images}${brandBadge}/${badge}/${shortId}/cover/${webpSupport ? 'webp' : 'jpg'}`, []);

	return (
		<li ref={element}>
			<StyledLink height={setContainerHeight(container)} to={`details/${shortId}/${brandBadge}/${badge}`}>
				{ failure && <BrokenContainer /> }
				{ onScreen && !failure && (
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
