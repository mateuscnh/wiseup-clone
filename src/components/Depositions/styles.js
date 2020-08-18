import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.background_secondary};
    text-align: center;
    padding: 40px 0;
    h1{
        padding: 20px 0;
        margin-bottom: 40px;
    }
`;
