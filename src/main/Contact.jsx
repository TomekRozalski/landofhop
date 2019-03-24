import React from 'react';
import styled from 'styled-components';

import { grid } from '../utils';

const Wrapper = styled.ul`
	${grid}
`;

const Contact = () => {
	console.log('contact render');

	return (
		<Wrapper>Contact</Wrapper>
	);
};

export default Contact;
