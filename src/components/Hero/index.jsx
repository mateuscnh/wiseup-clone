import React from 'react';

import { Container, Content, InfoHero, NotebookHero, Image, BlurShadow } from './styles';
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

                <NotebookHero>
                    <BlurShadow />
                    <Image img={elements_mob} alt="" />
                    <Image className="elements" img={elements} alt="" />
                    <Image img={notebook} alt="" />
                </NotebookHero>
            </Content>
        </Container>
    );
}

export default Hero;