import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    overflow-y: hidden;

    main {

        margin: 40px 123px 20px 123px;
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            
            margin-bottom: 40px;
            
            h1 {
                font-weight: 400;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
            
            button {
                width: 210px;
                margin-top: 0;
            }
        }

        .movies {
            //height: calc(100vh - 40px - 40px - 123px);
            height: 650px;
            overflow-y: scroll;

            /* Estilizando a barra de rolagem */
            &::-webkit-scrollbar {
                width: 12px; /* Largura da barra de rolagem */
                border-radius: 6px; /* Bordas arredondadas */
            }

            &::-webkit-scrollbar-thumb {
                background-color: ${({ theme }) => theme.COLORS.PINK};
                border-radius: 6px; 
            }

            &::-webkit-scrollbar-track {
                background-color: transparent; /* Cor de fundo do trilho */
                border-radius: 8px; 
            }

            &::-webkit-scrollbar-thumb:hover {
                background-color: #ff69b4; /* Rosa mais escuro ao passar o mouse */
            }
        }
        
        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
            
        }

        section {
            margin-bottom: 24px;
            
            > p {
                margin-bottom: 20px;
            }
        }
        }
        

    
    
`;

export const AddButton = styled(Link)`

`;