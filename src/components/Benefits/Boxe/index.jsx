import React from 'react';

import { Container, Lines } from './styles';

function Boxe({ icon, title, description }) {
    return (
        <Container>
            <img src={icon} alt="" />
            <h1>{title}</h1>
            <Lines>
                <span />
                <span />
            </Lines>
            <p>{description}</p>
        </Container>
    );
}

export default Boxe;