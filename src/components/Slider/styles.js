import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`
export const Dots = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 26px auto; 
`

export const Arrows = styled.div`
    position: absolute;
    z-index: 2;
    top: 40%;
    transform: translateY(-50%);

    display: grid;
    place-items: center;

    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 2px solid ${props => props.theme.colors.primary};
    cursor: pointer;
`

export const ArrowLeft = styled(Arrows)`
    left: -8%;
`;

export const ArrowRight = styled(Arrows)`
    right: -8%;
`;