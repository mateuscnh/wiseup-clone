import React from 'react';

import { Container } from './styles';
import play from '../../../assets/images/online/play-green-t.png';

function Module({ imgURL, title }) {
    return (
        <Container>
            <div className="img-content">
                <img src={imgURL} alt="" />
                <img src={play} alt="" />
            </div>
            <span>{title}</span>
        </Container>
    );
}

export default Module;