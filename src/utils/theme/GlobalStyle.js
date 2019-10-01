import { createGlobalStyle } from 'styled-components';

import {
	fonts as getFonts,
	normalize,
	nprogress,
	slider,
	toastify,
} from './css';
import colors from './colors';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
	${normalize}
	${nprogress}
	${getFonts}
	${slider}
	${toastify}

	*, *:before, *:after {
		box-sizing: border-box;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style-type: none;
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 0;
		padding: 0;
	}

	iframe, button {
		border: none;
	}

	fieldset {
		border: 0;
		margin: 0;
		padding: 0;
		min-width: auto;
	}

	html {
		font-size: 10px;
	}

	body {
		background-color: ${colors.gray[700]};
		font: 400 1.5rem / 2rem ${fonts.primary};
		color: ${colors.gray[100]};
	}
`;

export default GlobalStyle;
