import React, { useContext } from 'react';
// import styled from 'styled-components';


import { BeverageDetailsContext } from 'config';
// import { fonts } from 'utils/theme';

const Name = () => {
	const { beverage } = useContext(BeverageDetailsContext);


	return (

		<p>{ beverage.label.general.name[0].value }</p>

	);
};

export default Name;
