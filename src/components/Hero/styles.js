import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    padding-top: 100px;
    min-height: 116vh;
    background-color: ${props => props.theme.colors.background_primary};
`;

export const Content = styled.div` 
    text-align: center;
    color: ${props => props.theme.colors.text};
`;

export const InfoHero = styled.div`
    p{
        margin: 15px 20px 30px 20px;
    }
`;

export const NotebookHero = styled.div`
    position: relative;
    z-index: 1;
    margin-top: 20px;

    height: 360px;

    background: transparent url(${props => props.background}) no-repeat center;
    background-size: contain;
`;

export const Notebook = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    
    height: 240px;

    background: url(${props => props.background}) no-repeat center;
    background-size: contain;

`

export const BlurShadow = styled.div`
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);

    width: 280px;
    height: 280px;

    border-radius: 50%;

    filter: blur(40px);

    background-color: ${props => props.theme.colors.primary};
`
