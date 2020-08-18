import React from 'react';

import { Container } from './styles';

import img_forWho from '../../assets/images/online/img-para-quem.png';

function ForWho() {
    return (
        <Container className="content">
            <div className="social">
                <h1>Acompanhe nossas redes sociais:</h1>
                <p>@wiseuponline</p>
                <img src={img_forWho} alt="" />
            </div>
            <div className="forWho">
                <h1>Para quem o curso é desenvolvido?</h1>
                <p>O método Wise Up Online é para todos os níveis, sendo aconselhado para todas as pessoas que desejam desenvolver ou aprimorar o inglês. As aulas ensinam de forma intuitiva, atendendo pessoas que nunca tiveram contato com a língua e auxiliando quem já está em níveis mais avançados. O melhor de tudo isso é que o conteúdo está disponível nas versões inglês-português para facilitar seu acesso, e completamente em inglês para que você exercite sua escuta.</p>
            </div>
        </Container>
    );
}

export default ForWho;