import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    height: 60px;

    border: none;
    border-radius: 50px;

    font-size: 1.1rem;

    transition: .2s;

    cursor: pointer;

    :hover{
        filter: brightness(90%);
    }
`

function Button({ children }) {
    return <StyledButton>{children}</StyledButton>;
}

export default Button;