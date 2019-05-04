import styled from 'styled-components';
import { colors, fonts } from 'utils/theme';

export const DL = styled.dl`
    display: inline;
    margin: 0;
`;

export const DT = styled.dt`
    display: ${({ hidden }) => (hidden ? 'none' : 'inline')};
    font: 400 1.5rem / 2rem ${fonts.primary};
    color: ${colors.gray[200]};

    &::before {
        display: ${({ clear }) => (clear ? 'block' : 'none')};
        content: '';
    }

    &::after {
        content: ': ';
    }
`;

export const DD = styled.dd`
    display: inline;
    margin: 0;
    padding: 0;
    font: 400 1.5rem / 2rem ${fonts.primary};
    color: ${colors.gray[100]};

    &:not(:last-of-type)::after {
        content: ', ';
        color: ${colors.gray[200]};
    }
`;
