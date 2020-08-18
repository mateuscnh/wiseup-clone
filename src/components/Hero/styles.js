import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    padding: 100px 0;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background_primary};

    @media (min-width: 768px){
        padding-bottom: 60px;
        h1{
            margin: 0 auto;
            width: 300px;
        }
        button{
            width: 300px;
        }  

        div + div{
                div + img{
                    display: none;
                }
            }
    }

    @media (min-width: 992px){
        .content{
            display: flex;  
            justify-content: space-around;
            align-items: center;
        }
    }
`;

export const Content = styled.div` 
    text-align: center;
    color: ${props => props.theme.colors.text}; 
`;

export const InfoHero = styled.div`
    p{
        margin: 15px 20px 30px 20px;
    }

    @media (min-width: 992px){
        text-align: left;

        p{
            margin-left: 0;
        }
    }
`;

export const NotebookHero = styled.div`
    width: 100%;
    position: relative;
    z-index: 1;
    margin-top: 60px;

    .elements{
        display: none;
    }

    @media (min-width: 768px){
        .elements{
            display: block;
        }
    }

    @media (min-width: 992px){
        margin-top: 0;
    }
`;

export const Image = styled.img.attrs(
    props => ({ 'src': props.img })
)`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const BlurShadow = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);

    width: 280px;
    height: 280px;

    border-radius: 50%;

    filter: blur(40px);

    background-color: ${props => props.theme.colors.primary};

    @media (min-width: 768px){
        margin-top: 60px;
        width: 400px;
        height: 400px;
        
        > div{
            height: 400px;
        }
    }
`
