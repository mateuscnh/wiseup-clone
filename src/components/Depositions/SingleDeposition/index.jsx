import React from 'react';

import { Container } from './styles';

import aspas from '../../../assets/images/online/aspas-opinion.png';

function SingleDeposition({ name, deposition }) {
    return (
        <Container>
            <img src={aspas} alt="" />
            <p>{deposition}</p>
            <footer><h1>{name}</h1></footer>
        </Container>
    );
}

export default SingleDeposition;