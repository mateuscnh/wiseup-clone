import React from 'react';

import { Container, Video } from './styles';
import Button from '../Button';

import img_methodology from '../../assets/images/online/img-methodology.jpg';
import play from '../../assets/images/online/play-green-t.png';

function Methodology() {
    return (
        <Container id="methodology">
            <div className="content">
                <Video background={img_methodology}>
                    <div>
                        <img src={play} alt="" />
                        <p>Assista ao trailer</p>
                    </div>
                </Video>

                <h1>Metodologia</h1>
                <p>Com o curso do Wise Up Online você aprende observando o inglês aplicado na prática em situações mais comuns pelas quais você irá precisar utilizar a língua de acordo com o tema do seu interesse.</p>
                <p>Tudo para oferecer a você uma experiência de imersão cultural instigante, ajudando você a pensar em inglês e tornando seu aprendizado muito mais fácil.</p>
                <Button>SAIBA MAIS</Button>
            </div>
        </Container>
    );
}

export default Methodology;