import React from 'react';

import { Container, Content, InfoHero, NotebookHero, Notebook, BlurShadow } from './styles';
import Button from '../Button';

import elements from '../../assets/images/online/elementos.png';
import elements_mob from '../../assets/images/online/elementos-mob.png';
import notebook from '../../assets/images/online/notebook.png';

function Hero() {
    return (
        <Container>
            <Content className="content">
                <InfoHero>
                    <h1>Liberdade para aprender inglês.</h1>
                    <p>Com Wise Up Online, você é<br />independente para desenvolver seu<br />inglês onde quiser e na hora que puder.</p>
                    <Button>COMECE AGORA</Button>
                </InfoHero>
                <BlurShadow />
                <NotebookHero background={elements_mob} background2={elements}>
                    <Notebook background={notebook} />
                </NotebookHero>
            </Content>
        </Container>
    );
}

export default Hero;