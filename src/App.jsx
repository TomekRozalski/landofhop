import React, { Component } from 'react';
import { get } from 'lodash';

class App extends Component {
	render() {
		/**
		 * @param {number} first - First number.
		 * @param {number} second - Secode number.
		 * @returns {number} - Returns number.
		 */
		function addTwo(first, second) {
			return first + second;
		}

		const b = addTwo('dsd', 3); // Visual Studio Code shows an error

		const myObj = {
			first: {
				second: {
					third: 3,
				},
			},
		};

		const c = get(myObj, 'first.second.third');

		return (
			<>
				<h1>Abc</h1>
				<p>{ b }</p>
				<p>{ c }</p>
			</>
		);
	}
}

export default App;
