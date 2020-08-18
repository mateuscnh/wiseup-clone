import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 330px;
    height: 360px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 6px;

    background-color: #fff;

    img{
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
    }

    p{
        padding: 40px 20px;
    }

    footer{
        border-radius: 0 0 6px 6px;
        height: 80px;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.primary};
        h1{
            padding: 20px;
        font-size: 1.6rem;
        }
    }

    @media (min-width: 768px){
        margin-bottom: 60px;
    }

    @media (min-width: 992px){
        max-width: 24%;

        p{
            font-size: .9rem;
        }

        footer{
            h1{
                font-size: 1rem;
            }
        }
    }
  
`;
