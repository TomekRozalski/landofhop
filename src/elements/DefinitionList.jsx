import styled from 'styled-components';
import { colors, fonts } from 'utils/theme';

export const DL = styled.dl`
    display: inline;
    margin: 0;
`;

export const DT = styled.dt`
    display: ${({ hidden }) => (hidden ? 'none' : 'inline')};
    font: ${({ pale }) => (pale ? `200 1.3rem / 1.6rem ${fonts.main}` : `200 1.5rem / 2rem ${fonts.main}`)};
    color: ${({ pale }) => (pale ? colors.gray[200] : colors.gray[400])};

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
    font: ${({ pale }) => (pale ? `200 1.3rem / 1.6rem ${fonts.main}` : `300 1.5rem / 2rem ${fonts.main}`)};
    color: ${({ pale }) => (pale ? colors.gray[300] : colors.gray[600])};

    &:not(:last-of-type)::after {
        content: ', ';
        color: ${({ pale }) => (pale ? colors.gray[200] : colors.gray[600])};
        opacity: .5;
    }
`;
