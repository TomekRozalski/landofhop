import { css } from 'styled-components';

import breakpoints from './breakpoints';

export default Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => {
		let value = breakpoints.sm;

		if (
			label === 'xs'
			|| label === 'xm'
			|| label === 'md'
			|| label === 'lg'
			|| label === 'xl'
		) {
			value = breakpoints[label];
		}

		return (
			css`
				@media (min-width: ${value}px) {
					// @ts-ignore
					${css(...args)}
				}
			`
		);
	};

	return acc;
}, {});
