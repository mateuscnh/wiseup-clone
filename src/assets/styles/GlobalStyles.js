import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;       
    }

    html, body{
        height: 100%;
        color: ${props => props.theme.colors.primary};
        scroll-behavior: smooth;
    }

    h1, span{
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 40px;
        line-height: 45px;   
    }

    span{
        color: ${props => props.theme.colors.secondary};
    }

    p{
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        line-height: 24px;
        font-size: 1.1rem;
    }

    a{
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: #fff;
    }

    button{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;

        color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.secondary};
    }

    .content{
        max-width: 420px;
        margin: 0 auto;
        padding: 0 20px;
    }

`