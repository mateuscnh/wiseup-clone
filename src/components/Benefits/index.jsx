import React from 'react';

import { Container, BoxesBenefits } from './styles';
import Boxe from './Boxe';

import { data } from './data';

function Benefits() {
    return (
        <Container id="benefits">
            <div className="content">
                <h1>Só quem é aluno <span>Wise Up Online</span> estuda assim:</h1>
                <p>O Wise Up Online é um curso de inglês com um método inovador e diferente de escolas de ensino. Estude onde quiser com conteúdos exclusivos.</p>
            </div>
            <BoxesBenefits className="content">
                {data.map(boxe =>
                    <Boxe key={boxe.id} icon={boxe.icon} title={boxe.title} description={boxe.description} />
                )}
            </BoxesBenefits>
        </Container>
    );
}

export default Benefits;