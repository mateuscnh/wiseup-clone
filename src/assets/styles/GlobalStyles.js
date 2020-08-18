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
    }

    h1, span{
        font-family: 'Nunito', sans-serif;
        font-weight: 700;   
    }

    span{
        color: ${props => props.theme.colors.secondary};
    }

    p{
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
    }

    button{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    .container{
        max-width: 420px;
        margin: 0 auto;
    }

`