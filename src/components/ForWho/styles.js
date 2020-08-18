import styled from 'styled-components';

export const Container = styled.div` 
    h1{
        margin-top: 60px;
        padding: 20px;
    }
    p{
        margin: 14px;
    }
    img{
        width: 100%;
        margin: 20px 0;
    }
    .forWho{
        h1{
            margin-top: 20px;
        }
        p{
        margin-bottom: 60px;

        }
    }

    @media (min-width: 768px){
        display: flex;
        align-items: center;

        .social{
            padding-right: 30px;
            width: 50%;

            h1, p{
                display: none;
            }
        }

        .forWho{
            width: 50%;
            text-align: left;
        }
    }
`;
