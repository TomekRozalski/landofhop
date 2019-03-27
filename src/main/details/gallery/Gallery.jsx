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

	const Application = PIXI.Application;
	const loader = PIXI.loader;
	const resources = PIXI.loader.resources;
	const Sprite = PIXI.Sprite;
	const Text = PIXI.Text;

	const checkHowManyImages = () => {
		// @ToDo - think about a loop
		// const smallImage = new Image();
		// const imagePath = `/img/browar-kormoran/BpgUx9/1-na-100/container/0${i}.jpg`;
		// smallImage.src = imagePath;

		// smallImage.addEventListener('load', smallImageLoaded);
		// smallImage.addEventListener('error', wrongImagePath);
	};

	useEffect(() => {
		pixiApp = new Application({
			width: 220,
			height: 500,
			transparent: true,
		});

		myCanvas.current.appendChild(pixiApp.view);

		const message = new Text('');

		const isLoading = () => {
			console.log('isLoading');

			const spinner = new Sprite(resources['/img/paradrop.png'].texture);
			spinner.rotation = 0 * Math.PI / 180;

			const { height, width } = pixiApp.renderer;

			spinner.scale.set(0.5, 0.5);
			spinner.position.set(width / 2 - 50, height / 2 - 50);
			spinner.anchor.set(0.5, 0.5);

			const animate = () => {
				spinner.rotation += 0.05;
			};

			message.position.set(width / 2, height / 2 + 100);
			message.anchor.set(0.5);

			pixiApp.stage.addChild(message);

			pixiApp.ticker.add(animate);
			pixiApp.stage.addChild(spinner);
		};

		const setup = () => {
			const containers = [];

			for (let i = 1; i <= 9; i += 1) {
				const container = new Sprite(resources[`/img/browar-kormoran/BpgUx9/1-na-100/container/0${i}.jpg`].texture);
				containers.push(container);
				container.alpha = 0;

				container.scale.set(0.5);
				container.interactive = true;

				container.on('pointerdown', () => {
					console.log('yes');
				});

				const onDragStart = (event) => {
					container.data = event.data;
					container.dragging = true;
				};

				const onDragEnd = () => {
					delete container.data;
					container.dragging = false;
				};

				const onDragMove = () => {
					if (container.dragging === true) {
						const newPosition = container.data.getLocalPosition(container.parent);
						container.x = newPosition.x;
						container.y = newPosition.y;
					}
				};

				container
					.on('pointerdown', onDragStart)
					.on('pointerup', onDragEnd)
					.on('pointerupoutside', onDragEnd)
					.on('pointermove', onDragMove);

				pixiApp.ticker.add((delta) => {
					if (container.dragging === true) {
						container.rotation += 0.1 * delta;
					}
				});

				setTimeout(() => {
					const animate = () => {
						if (container.alpha < 1) {
							container.alpha += 0.2;
						}
					};

					pixiApp.ticker.add(animate);
					pixiApp.stage.addChild(container);
				}, 50 * i);
			}
		};

		const loadProgressHandler = (load) => {
			message.text = `${load.progress}%`;
		};

		const images = new Array(9).fill('').map((item, i) => `/img/browar-kormoran/BpgUx9/1-na-100/container/0${i + 1}.jpg`);

		PIXI.loader
			.add('/img/paradrop.png', isLoading)
			.add(images)
			.on('progress', loadProgressHandler)
			.load(setup);
	}, []);

	console.log('->', brand, shortId, badge);

	return <Wrapper ref={myCanvas} />;
};

export default Gallery;
