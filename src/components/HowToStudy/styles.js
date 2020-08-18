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

    @media (min-width: 768px){
        .infos{
            display: flex;
            justify-content: space-between;

            h1{
                text-align: right;
                margin-right: 20px;
            }

            img{
                position: relative;
                top: -100px;
                max-width: 300px;
            }

            div{
                margin-left: 20px;
            }

        }
            button{
                width: 260px;
            }
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
