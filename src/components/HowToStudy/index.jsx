import React from 'react';

import { Container, Details, Modules } from './styles';
import Button from '../Button';
import Module from './Module';

import cel_gif from '../../assets/images/online/cel-ementa-anim.gif';

import aeroporto from '../../assets/images/online/aeroporto-fundo-cima.jpg';
import drive from '../../assets/images/online/drive-fundo-cima.jpg';
import hotel from '../../assets/images/online/hotel-fundo-cima.jpg';
import esportes from '../../assets/images/online/esportes-fundo-cima.jpg';
import restaurantes from '../../assets/images/online/restaurantes-fundo-cima.jpg';
import transporte from '../../assets/images/online/transporte-fundo-cima.jpg';
import compras from '../../assets/images/online/compras-fundo-cima.jpg';
import viajante from '../../assets/images/online/viajante-fundo-cima.jpg';
import estrada from '../../assets/images/online/estrada-fundo-cima.jpg';
import parques from '../../assets/images/online/parques-fundo-cima.jpg';

function HowToStudy() {
    const data = [
        {
            id: 1,
            imgURL: aeroporto,
            title: 'Aeroporto'
        },
        {
            id: 2,
            imgURL: drive,
            title: 'Dirigindo'
        },
        {
            id: 3,
            imgURL: hotel,
            title: 'Hotel'
        },
        {
            id: 4,
            imgURL: esportes,
            title: 'Esportes e Jogos'
        },
        {
            id: 5,
            imgURL: restaurantes,
            title: 'Restaurantes'
        },
        {
            id: 6,
            imgURL: transporte,
            title: 'Transportes'
        },
        {
            id: 7,
            imgURL: compras,
            title: 'Compras'
        },
        {
            id: 8,
            imgURL: viajante,
            title: 'Viajante'
        },
        {
            id: 9,
            imgURL: estrada,
            title: 'Pé na Estrada'
        },
        {
            id: 10,
            imgURL: parques,
            title: 'Parques Temáticos'
        },
    ];

    return (
        <Container id="howToStudy">
            <div className="content">
                <h1>Como estudar com o <span>Wise Up Online?</span></h1>
                <img src={cel_gif} alt="" />

                <Details>
                    <p>O curso de inglês online é bem simples e intuitivo. Em três passos você desenvolve seu inglês:</p>
                    <p><span>Aprenda</span> com documentários originais que apresentam o inglês aplicado na prática.</p>
                    <p><span>Explore</span> com as aulas de vocabulário, gramática e guides de palavras com listening.</p>
                    <p><span>Pratique</span> com mais de 4 mil exercícios de fixação.</p>
                    <Button>ASSINE JÁ</Button>
                </Details>

                <Modules>
                    {data.map(({ id, imgURL, title }) =>
                        <Module key={id} imgURL={imgURL} title={title} />
                    )}
                </Modules>
                <Button>SAIBA MAIS</Button>
            </div>
        </Container>
    );
}

export default HowToStudy;