import styled from 'styled-components';

export const Container = styled.div`
    a {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 24px;
        }

        span {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;