import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    main {
        margin: 40px 123px 0 123px;

        > h1 {
            margin-top: 24px;
        }

        .input-header {
            margin-top: 40px;
            display: flex;
            gap: 40px;
        }

        > textarea {
            margin-top: 40px;
        }

        > section {

            .input-marks {
                padding: 16px;

                display: flex;
                align-items: center;
                gap: 24px;

                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
                border-radius: 10px;
            }
        }


        .button-footer {
            margin-top: 40px;
            display: flex;
            gap: 40px;

            // estilizar somente o primeiro botão
            button:first-child {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }
    }
`;

export const BackHome = styled(Link)``;