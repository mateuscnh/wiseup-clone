import React from 'react';

import { Container, StyledDepositions } from './styles';
import SingleDeposition from './SingleDeposition';
import Slider from '../Slider';

import icon_prev from '../../assets/images/icon-seta-prev.svg';
import icon_next from '../../assets/images/icon-seta-next.svg';

import { data } from './data';

function Depositions() {
    return (
        <Container id="depositions">
            <div className="content">
                <h1>Depoimentos</h1>
                <Slider arrowLeft={icon_prev} arrowRight={icon_next}>
                    {data.map(({ id, name, deposition }) =>
                        <SingleDeposition key={id} name={name} deposition={deposition} />
                    )}
                </Slider>
                <StyledDepositions>
                    {data.map(({ id, name, deposition }) =>
                        <SingleDeposition key={id} name={name} deposition={deposition} />
                    )}
                </StyledDepositions>
            </div>
        </Container>
    );
}

export default Depositions;