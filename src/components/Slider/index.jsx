import React, { useState, useEffect } from 'react';

import { Container, Dots, ArrowLeft, ArrowRight } from './styles';

import SingleDot from './SingleDot';

export default function ({ children, arrowLeft, arrowRight }) {
    const [visibleSlide, setVisibleSlide] = useState(0);
    const [dots, setDots] = useState([]);

    useEffect(() => {
        function loadDots() {
            const dotsChildren = [];

            for (let index = 0; index < children.length; index++) {
                dotsChildren.push(index)
            }

            setDots(dotsChildren);
        }

        loadDots();

    }, [children.length]);


    function prevSlide() {
        if (visibleSlide <= 0) {
            setVisibleSlide(dots.length - 1);
            return;
        }
        setVisibleSlide(visibleSlide - 1);
    }

    function nextSlide() {
        if (visibleSlide >= dots.length - 1) {
            setVisibleSlide(0);
            return;
        }
        setVisibleSlide(visibleSlide + 1);
    }

    return (
        <Container>
            <ArrowLeft onClick={prevSlide}><img src={arrowLeft} alt="" /></ArrowLeft>
            <ArrowRight onClick={nextSlide}><img src={arrowRight} alt="" /></ArrowRight>
            {children &&
                children[visibleSlide]
            }
            <Dots>
                {dots.map((dot) =>
                    <SingleDot
                        key={dot}
                        id={dot}
                        visibleSlide={visibleSlide}
                        callbackParent={(id) => setVisibleSlide(id)}
                    />
                )}
            </Dots>
        </Container>
    );
}
