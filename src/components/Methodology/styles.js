import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 0;

    text-align: center;

    background-color: ${props => props.theme.colors.background_secondary};

    h1, button{
        margin: 24px 0;
    }

    h1 + p{
        margin-bottom: 20px;
    }
`;

export const Video = styled.div`
    position: relative;

    height: 240px;

    border-radius: 8px;

    background: url(${props => props.background}) no-repeat center;
    background-size: contain;


    div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: center;
        color: ${props => props.theme.colors.text};
        
        cursor: pointer;
        img{
        transition: .2s;
        }

        :hover img{
            transform: scale(1.05);
        }
    }
`;
