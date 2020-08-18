import React, { useState } from 'react';

import { Container, Content, Menu, MobMenu } from './styles';

import logo from '../../assets/images/wup-logo.svg';
import logo_mobile from '../../assets/images/wup-logo-mob.svg';

import menu_bars from '../../assets/images/icon-menu.svg';
import menu_x from '../../assets/images/icon-menu-x.svg';

function Header() {
    const [activeMenu, setActiveMenu] = useState(false);
    const baseURL = 'http://localhost:3000';

    function handleClick(e) {
        const bars = document.querySelector('#menu-bars');
        const bodyStyle = document.body.style;

        if (e.target.href) { // Click item filter
            bars.src = baseURL + menu_bars;
            bodyStyle.overflow = 'visible';
            setActiveMenu(false);
            return;
        }

        function activeMenu(active) {
            setActiveMenu(active);
            bodyStyle.overflow = 'hidden';
            if (active) return menu_x;
            bodyStyle.overflow = 'visible';
            return menu_bars;
        }

        const imgMenu = e.target.src === baseURL + menu_bars ? activeMenu(true) : activeMenu(false);

        e.target.src = baseURL + imgMenu;
    }

    return (
        <Container>
            <Content className="content">
                <img src={logo_mobile} alt="" />
                <img src={logo} alt="" />
                <Menu>
                    <ul>
                        <li><a href="#benefits" onClick={handleClick}>Benefícios</a></li>
                        <li><a href="#methodology" onClick={handleClick}>Metodologia</a></li>
                        <li><a href="#howToStudy" onClick={handleClick}>Como estudar?</a></li>
                        <li><a href="#depositions" onClick={handleClick}>Depoimentos</a></li>
                    </ul>
                </Menu>
                <img id="menu-bars" src={menu_bars} alt="" onClick={handleClick} />
            </Content>
            {activeMenu &&
                <MobMenu>
                    <ul>
                        <li><a href="#benefits" onClick={handleClick}>Benefícios</a></li>
                        <li><a href="#methodology" onClick={handleClick}>Metodologia</a></li>
                        <li><a href="#howToStudy" onClick={handleClick}>Como estudar?</a></li>
                        <li><a href="#depositions" onClick={handleClick}>Depoimentos</a></li>
                    </ul>
                </MobMenu>
            }
        </Container>
    );
}

export default Header;