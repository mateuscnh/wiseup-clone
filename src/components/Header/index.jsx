import React, { useState, useEffect } from 'react';

import { Container, Content, MobMenu } from './styles';

import logo_mobile from '../../assets/images/wup-logo-mob.svg';
import menu_bars from '../../assets/images/icon-menu.svg';
import menu_x from '../../assets/images/icon-menu-x.svg';

function Header() {
    const [activeMenu, setActiveMenu] = useState(false);

    function handleClick(e) {

        function activeMenu(active) {
            setActiveMenu(active);
            if (active) return menu_x;
            return menu_bars;
        }

        const baseURL = 'http://localhost:3000';
        const imgMenu = e.target.src === baseURL + menu_bars ? activeMenu(true) : activeMenu(false);

        e.target.src = baseURL + imgMenu;
    }

    return (
        <Container>
            <Content className="content">
                <img src={logo_mobile} alt="" />
                <img src={menu_bars} alt="" onClick={handleClick} />
            </Content>
            {activeMenu &&
                <MobMenu>
                    <ul>
                        <li><a href="#benefits">Benefícios</a></li>
                        <li><a href="#methodology">Metodologia</a></li>
                        <li><a href="#howToStudy">Como estudar?</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </MobMenu>
            }
        </Container>
    );
}

export default Header;