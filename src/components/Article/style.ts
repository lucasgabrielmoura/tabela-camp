import styled from 'styled-components';

export const Artigo = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.background2};
    .positive{
      color: ${props=> props.theme.colors.positive};
    }
    .negative{
      color: ${props=> props.theme.colors.negative};
    }
    table{
        background-color: ${props => props.theme.colors.background};
        padding: 1rem;
        border-collapse: collapse;
        color: ${props=> props.theme.colors.text};

        td{
            padding: 1rem 6rem 1rem 6rem;
            text-align: center;
            border-top: 2px solid ${props => props.theme.colors.hover};
            border-bottom: 2px solid ${props => props.theme.colors.hover};
            border-right: 2px solid ${props => props.theme.colors.hover};
        }

        tr{
            width: 100vw;
        }

        thead{
            border-collapse: collapse;
            td{
                border: none;
                border-right: 2px solid ${props => props.theme.colors.hover};
                font-weight:bold;
                text-align: center;
            }
        }
    }
`;

//usar o tfoot e th para coisas finais, onde não precisa de borda.
