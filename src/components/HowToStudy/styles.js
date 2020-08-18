import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 0;
    background-color: ${props => props.theme.colors.background_primary};
    
    h1, p{
        color: ${props => props.theme.colors.text};
    }

    img{
        max-width: 390px;
    }

    button{
        margin: 26px 0;
    }
`;

export const Details = styled.div`
    text-align: left;

    p, button{
        margin: 16px 0;
    }
    
    span{
        font-size: 1.2rem;
    }

    p, span{
        line-height: 26px;
    }
`;

export const Modules = styled.div`
    margin-top: 30px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
