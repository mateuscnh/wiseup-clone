import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    margin-bottom: 12px;
    max-width: 180px;
    min-height: 280px;

    border-radius: 8px;

    background-color: ${props => props.theme.colors.primary};

    text-align: left;
    color: ${props => props.theme.colors.text};
    
    h1{
        margin-top: 20px;
        height: 40px;

        font-size: 1rem;
        line-height: 20px;
    }

    p{
        font-size: 0.9rem;
        line-height: 18px;
        color: ${props => props.theme.colors.secondary};
    }
`;

export const Lines = styled.div`
    display: flex;
    margin-top: 10px;

    span{
        margin-right: 6px;
        width: 25px;
        height: 4px;

        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    span + span{
        width: 14px;
    }


`
export const Line_2 = styled.div`
    position: relative;
    width: 25px;
    height: 4px;

    border-radius: 10px;

    background-color: ${props => props.theme.colors.secondary};
`