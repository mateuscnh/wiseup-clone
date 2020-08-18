import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 4px;
    max-width: 180px;
    height: 220px;

    text-align: left;

    border-radius: 6px;
    overflow: hidden;

    background-color: ${props => props.theme.colors.primary};
    background-size: cover;

    .img-content{
        position: relative;
        height: 60%;
        overflow: hidden;
        
        img{
            width: 100%;
            object-fit: cover;
            object-position: center;
        }

        img + img{
            width: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            height: 60px;

            cursor: pointer;
        }
    }

    span{
        display: block;
        font-size: 1.1rem;
        line-height: 22px;
        padding: 16px;
    }

    @media (min-width: 768px){
        min-width: 32%;
    }

    @media (min-width: 992px){
        min-width: 23%;
    }
`;
