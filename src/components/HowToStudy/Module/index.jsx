import React from 'react';

import { Container } from './styles';
import play from '../../../assets/images/online/play-green-t.png';

function Module({ imgURL, title, description }) {
    return (
        <Container>
            <div className="img-content">
                <img src={imgURL} alt="" />
                <img src={play} alt="" />
            </div>
            <footer>
                <span>{title}</span>
                <p>{description}</p>
            </footer>
        </Container>
    );
}

export default Module;