import styled from 'styled-components';

export default styled.li`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-width: 1px;
	border-style: solid;

	& + & {
		border-left-width: 0;
	}
`;
