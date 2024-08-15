import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    
    padding: 0 123px;


`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    margin: 0 64px;

    width: 100%;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;

    > img {
        width: 56px;
        border-radius: 50%;
    }

    > div {
        width: 100px;
        display: flex;
        flex-direction: column;

        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            margin-left: auto;
        }

        strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            margin-left: auto;
        }
    }

`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-weight: 700;
    }

`;