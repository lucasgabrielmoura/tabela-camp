import styled from 'styled-components';


export const Cabeca = styled.div`
    display: flex;
    width: 100vw;
    height: 20vh;
    background-color: ${props => props.theme.colors.background};
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 2em;
        color: ${props => props.theme.colors.text};
        padding-left: 3rem;
    }
    ul{
        list-style-type: none;
        display: flex;
        font-size: 1em;
        padding-right: 3rem;
        font-weight: bold;
        
        li{
            padding: 1rem;
        }
        a{
            text-decoration: none;
            color: ${props => props.theme.colors.text};
            &:hover{
                color: ${props => props.theme.colors.hover};
            }
        }
    }
    @media (max-width: 600px) {
        flex-direction: column;
        h1{
            font-size: 2em;
            padding: 0.6rem;
        }
        ul{
            padding-right: 0;
        li{
            padding: 0.6rem;
        }
    }
    }
`;
