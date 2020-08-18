import React from 'react';

import { Container } from './styles';
import SingleDeposition from './SingleDeposition';
import Slider from '../Slider';

import icon_prev from '../../assets/images/icon-seta-prev.svg';
import icon_next from '../../assets/images/icon-seta-next.svg';

function Depositions() {
    const data = [
        {
            id: 1,
            name: 'Marcelo Damásio',
            deposition: 'Eu tenho me surpreendido cada dia mais com a metodologia. Vídeo aulas de qualidade, exercícios práticos e objetivos. O inglês da Wise Up Online está permitindo me projetar e concorrer no mercado de trabalho internacional.'
        },
        {
            id: 2,
            name: 'Estefânia Queiroz',
            deposition: 'Sou professora de inglês. Recomendo Wise Up Online sobretudo para colegas, para aprendermos vocabulário em prática e estarmos sempre em contato com a língua.'
        },
        {
            id: 3,
            name: 'Henrique Carvalho',
            deposition: 'Recomendo pela qualidade das aulas e conteúdo rico que facilita o aprendizado. Sempre tive dificuldade com a língua, mas com esse curso estou evoluindo.'
        },
        {
            id: 4,
            name: 'Paulo Geovani',
            deposition: 'Abordagem do curso é bem dinâmico, de fácil entendimento. O Wise Up Online aborda situações do cotidiano, assim fica mais fácil a compreensão.'
        },
    ];

    return (
        <Container>
            <div className="content">
                <h1>Depoimentos</h1>
                <Slider arrowLeft={icon_prev} arrowRight={icon_next}>
                    {data.map(({ id, name, deposition }) =>
                        <SingleDeposition key={id} name={name} deposition={deposition} />
                    )}
                </Slider>
            </div>
        </Container>
    );
}

export default Depositions;