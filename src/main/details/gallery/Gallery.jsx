import React, { useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import * as Pixi from 'pixi.js';

import { BeverageDetailsContext, DeviceContext } from 'config';
import { constants } from 'utils';
import { fonts } from 'utils/theme';

const Wrapper = styled.div`
	grid-column: 1 / 3;
	grid-row: 1 / -1;
	font: 500 3rem / 4rem ${fonts.primary};
	justify-self: center;
`;

const Gallery = () => {
	const { pixelRatio, webpSupport } = useContext(DeviceContext);
	const { beverage } = useContext(BeverageDetailsContext);

	const {
		badge,
		label: {
			general: {
				brand: {
					badge: brand,
				},
			},
		},
		shortId,
	} = beverage;

	const myCanvas = useRef();

	useEffect(() => {
		let pixiApp;

		const {
			Application,
			loader,
			Sprite,
			Text,
		} = Pixi;

		myCanvas.current.innerHTML = '';

		const { resources } = loader;

		const imagesAmount = get(beverage, 'editorial.photos.gallery', 0);
		const imagesPath = `${constants.servers.images}${brand}/${badge}/${shortId}/container/${webpSupport ? 'webp' : 'jpg'}/${pixelRatio}`;

		if (imagesAmount) {
			pixiApp = new Application({
				width: 220,
				height: 500,
				transparent: true,
				antialias: true,
			});

			myCanvas.current.appendChild(pixiApp.view);

			const style = new Pixi.TextStyle({
				fontWeight: 300,
				fontSize: '1.5rem',
				fontFamily: fonts.primary,
			});

			const message = new Text('', style);

			const isLoading = () => {
				const spinner = new Sprite(resources['/img/land-of-hop-logotype.svg'].texture);
				spinner.rotation = 0 * Math.PI / 180;

				spinner.scale.set(0.5, 0.5);
				spinner.position.set(110, 230);
				spinner.anchor.set(0.5, 0.5);

				const animate = () => {
					spinner.rotation += 0.05;
				};

				message.position.set(110, 300);
				message.anchor.set(0.5);

				pixiApp.stage.addChild(message);

				pixiApp.ticker.add(animate);
				pixiApp.stage.addChild(spinner);
			};

			const setup = () => {
				const containers = [];

				for (let i = 1; i <= imagesAmount; i += 1) {
					const order = i.toString().padStart(2, '0');
					const container = new Sprite(resources[`${imagesPath}/${order}.${webpSupport ? 'webp' : 'jpg'}`].texture);
					containers.push(container);

					container.scale.set(0.5);
					container.visible = false;

					pixiApp.stage.addChild(container);
				}

				const rectangle = new Pixi.Graphics();
				rectangle.beginFill(0, 0);
				rectangle.drawRect(0, 0, 220, 500);
				rectangle.endFill();

				rectangle.interactive = true;

				let allowMove = false;
				let from = 0;
				let current = 0;

				const onDragStart = (event) => {
					allowMove = true;
					from = event.data.global.x;
				};

				const onDragEnd = () => {
					allowMove = false;
				};

				const onDragMove = (event) => {
					if (event.target && allowMove) {
						current = event.data.global.x;

						let value = (current - from).toFixed() % imagesAmount;
						if (value <= 0) {
							value = imagesAmount + value;
						}

						containers.forEach((item) => {
							item.visible = false;
						});

						containers[value - 1].visible = true;
					}
				};

				rectangle
					.on('pointerdown', onDragStart)
					.on('pointerup', onDragEnd)
					.on('pointerupoutside', onDragEnd)
					.on('pointermove', onDragMove);

				containers[0].visible = true;

				pixiApp.stage.addChild(rectangle);
			};

			const loadProgressHandler = (load) => {
				message.text = `${load.progress.toFixed(2)}%`;
			};

			const images = new Array(imagesAmount).fill('').map((item, i) => {
				const order = (i + 1).toString().padStart(2, '0');

				return `${imagesPath}/${order}.${webpSupport ? 'webp' : 'jpg'}`;
			});

			loader
				.add('/img/land-of-hop-logotype.svg', isLoading)
				.add(images)
				.on('progress', loadProgressHandler)
				.load(setup);
		}

		return () => {
			loader.reset();
		};
	}, [beverage]);

	return <Wrapper ref={myCanvas} />;
};

export default Gallery;
