import React, { useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import * as Pixi from 'pixi.js';

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

	const imagesAmount = get(beverage, 'editorial.images', 0);

	let pixiApp;
	const myCanvas = useRef();

	const {
		Application,
		loader,
		Sprite,
		Text,
	} = Pixi;

	const { resources } = loader;

	useEffect(() => {
		console.log('imagesAmount', imagesAmount);
		if (imagesAmount) {
			console.log('useEffect');

			pixiApp = new Application({
				width: 220,
				height: 500,
				transparent: true,
				antialias: true,
			});

			myCanvas.current.appendChild(pixiApp.view);

			const style = new Pixi.TextStyle({
				font: `300 1.5rem / 1 ${fonts.primary}`,
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
					const container = new Sprite(resources[`/img/${brand}/${shortId}/${badge}/container/${order}.jpg`].texture);
					containers.push(container);
					// container.alpha = 0;

					container.scale.set(0.5);
					container.visible = false;

					pixiApp.stage.addChild(container);
					// container.interactive = true;

					// container.on('pointerdown', () => {
					// 	console.log('yes');
					// });

					// const onDragStart = (event) => {
					// 	container.data = event.data;
					// 	container.dragging = true;
					// };

					// const onDragEnd = () => {
					// 	delete container.data;
					// 	container.dragging = false;
					// };

					// const onDragMove = () => {
					// 	if (container.dragging === true) {
					// 		const newPosition = container.data.getLocalPosition(container.parent);
					// 		container.x = newPosition.x;
					// 		container.y = newPosition.y;
					// 	}
					// };

					// container
					// 	.on('pointerdown', onDragStart)
					// 	.on('pointerup', onDragEnd)
					// 	.on('pointerupoutside', onDragEnd)
					// 	.on('pointermove', onDragMove);

					// pixiApp.ticker.add((delta) => {
					// 	if (container.dragging === true) {
					// 		container.rotation += 0.1 * delta;
					// 	}
					// });

					// setTimeout(() => {
					// const animate = () => {
					// 	if (container.alpha < 1) {
					// 		container.alpha += 0.2;
					// 	}
					// };

					// pixiApp.ticker.add(animate);
					// pixiApp.stage.addChild(container);
					// }, 50 * i);
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

				containers[5].visible = true;

				pixiApp.stage.addChild(rectangle);
			};

			const loadProgressHandler = (load) => {
				message.text = `${load.progress.toFixed(2)}%`;
			};

			const images = new Array(imagesAmount).fill('').map((item, i) => {
				const order = (i + 1).toString().padStart(2, '0');

				return `/img/${brand}/${shortId}/${badge}/container/${order}.jpg`;
			});

			loader
				.add('/img/land-of-hop-logotype.svg', isLoading)
				.add(images)
				.on('progress', loadProgressHandler)
				.load(setup);

			return () => {
				console.log('unmount');
				loader.reset();
			};
		}
	}, []);

	console.log('->', brand, shortId, badge);

	return <Wrapper ref={myCanvas} />;
};

export default Gallery;
