import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    main {
        margin: 40px 123px 0 123px;


        > title {
            margin: 24px 0;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 20px;

        }

        > section {
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 10px
            
            
        }
        .author {
            display: flex;
            align-items: center;
            gap: 15px;

            margin-bottom: 40px;
            
            span {
                display: flex;
                align-items: center;
                gap: 5px;

                h2 {
                    font-size: 16px;
                    color: ${({ theme }) => theme.COLORS.PINK};
                }
            }
        }

        img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }

        .descricao {
            margin-top: 40px;
            p {
                margin-top: 10px;
                text-align: justify;
            }
        }
    }
`;

export const BackHome = styled(Link)``;