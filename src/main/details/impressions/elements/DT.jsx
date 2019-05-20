import styled from 'styled-components';
import { colors, fonts } from 'utils/theme';

export const DT = styled.dt`
    display: inline-block;
    width: 110px;
    margin: .2rem 0;
	padding-right: .5rem;
    font: 400 1.5rem / 2rem ${fonts.primary};
	text-align: right;
    color: ${colors.gray[100]};

    &::before {
        display: block;
        content: '';
    }

    &::after {
        content: ':';
    }
`;

export default DT;
