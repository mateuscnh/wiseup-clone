import React from 'react';

import { Container, Details, Modules } from './styles';
import Button from '../Button';
import Module from './Module';

import cel_gif from '../../assets/images/online/cel-ementa-anim.gif';

import { data } from './data';

function HowToStudy() {
    return (
        <Container id="howToStudy">
            <div className="content">
                <div className="infos">
                    <h1>Como estudar com o <span>Wise Up Online?</span></h1>
                    <img src={cel_gif} alt="" />

                    <Details>
                        <p>O curso de inglês online é bem simples e intuitivo. Em três passos você desenvolve seu inglês:</p>
                        <p><span>Aprenda</span> com documentários originais que apresentam o inglês aplicado na prática.</p>
                        <p><span>Explore</span> com as aulas de vocabulário, gramática e guides de palavras com listening.</p>
                        <p><span>Pratique</span> com mais de 4 mil exercícios de fixação.</p>
                        <Button>ASSINE JÁ</Button>
                    </Details>
                </div>

                <Modules>
                    {data.map(({ id, imgURL, title, description }) =>
                        <Module key={id} imgURL={imgURL} title={title} description={description} />
                    )}
                </Modules>
                <Button>SAIBA MAIS</Button>
            </div>
        </Container>
    );
}

export default HowToStudy;