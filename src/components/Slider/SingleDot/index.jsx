import React from 'react';
import styled, { css } from 'styled-components';

const SingleDot = styled.div`
    margin: 0 8px;
    width: 14px;
    height: 14px;

    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.primary};

    cursor: pointer;

    transition: .2s;

    :hover{
        transform: scale(1.1);
    }

    ${({ id, visibleSlide }) => {
        if (visibleSlide === id) return css`
                transform: scale(1.1);
                background-color: ${props => props.theme.colors.primary};

                :hover{
                    transform: scale(1.2);
                }
            `
    }}
`

export default function ({ id, visibleSlide, callbackParent }) {
    return (
        <SingleDot
            id={id}
            visibleSlide={visibleSlide}
            onClick={(e) => callbackParent(parseInt(e.target.id))}
        />);
}