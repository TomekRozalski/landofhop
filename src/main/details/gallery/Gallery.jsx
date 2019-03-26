import React, { useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import * as PIXI from 'pixi.js';

import { BeverageDetailsContext } from 'config';
import { fonts } from 'utils/theme';

const Wrapper = styled.div`
	grid-column: 1 / 3;
	margin: 3rem 0;
	font: 500 3rem / 4rem ${fonts.primary};
	text-align: center;
`;

const Gallery = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const { badge, shortId } = beverage;
	const brand = get(beverage, 'label.general.brand.badge');

	let pixiApp;
	const myCanvas = useRef();

	useEffect(() => {
		pixiApp = new PIXI.Application({
			width: 220,
			height: 500,
			transparent: true,
		});

		myCanvas.current.appendChild(pixiApp.view);


		const path = '/img/alebrowar/iNFDHT/amber-boy/covers/regular.jpg';


		function setup() {
			const first = new PIXI.Sprite(
				PIXI.loader.resources[path].texture,
			);

			console.log('first', first);

			pixiApp.stage.addChild(first);
		}

		PIXI.loader
			.add(path)
			.load(setup);
	}, []);

	console.log('->', brand, shortId, badge);

	return <Wrapper ref={myCanvas} />;
};

export default Gallery;
