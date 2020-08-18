import React from 'react';

import { Container, BoxesBenefits } from './styles';
import Boxe from './Boxe';

import icon_multiplataforma from '../../assets/images/online/icon-multiplataforma.png';
import icon_documentario from '../../assets/images/online/icon-documentario.png';
import icon_bandeira from '../../assets/images/online/icon-bandeira.png';
import icon_video from '../../assets/images/online/icon-video.png';
import icon_certificado from '../../assets/images/online/icon-certificado.png';

function Benefits() {
    const data = [
        {
            id: 1,
            icon: icon_multiplataforma,
            title: 'Multiplataforma',
            description: 'Acesse a plataforma em qualquer dispositivo.'
        },
        {
            id: 2,
            icon: icon_documentario,
            title: 'Documentários Originais',
            description: 'Assista a documentários originais produzidos nos E.U.A.'
        },
        {
            id: 3,
            icon: icon_bandeira,
            title: 'Professores nativos',
            description: 'Estude com situações reais e professores nativos da língua inglesa.'
        },
        {
            id: 4,
            icon: icon_video,
            title: '+ de 400 vídeos',
            description: 'Aulas de gramática e vocabulário e + de 4.000 exercícios.'
        },
        {
            id: 5,
            icon: icon_certificado,
            title: 'Certificado',
            description: 'Receba seu certificado de acordo com suas horas de estudo.'
        },
    ]
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