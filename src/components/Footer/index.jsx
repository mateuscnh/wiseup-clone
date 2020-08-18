import React from 'react';
import styled from 'styled-components';

import icon_face from '../../assets/images/online/icon-face.png';
import icon_youtube from '../../assets/images/online/icon-youtube.png';
import icon_insta from '../../assets/images/online/icon-insta.png';

const Container = styled.footer`
    padding: 40px 0;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background_primary};
    
    p{
        font-size: .9rem;
        padding: 20px 0;
    }

    img{
        max-height: 30px;
        margin: 10px 5px;
        cursor: pointer;
    }

    @media (min-width: 768px){
        .content{
            display: flex;
            align-items: center;
            justify-content: space-around;

            p{
                font-size: .8rem;
            }
        }
    }
`

function Footer() {
    return (
        <Container>
            <div className="content">
                <p>Copyright © 2019 Wise Up. All Rights Reserved | Política de Privacidade | Termos de Serviço | Ajuda</p>
                <img src={icon_face} alt="" />
                <img src={icon_youtube} alt="" />
                <img src={icon_insta} alt="" />
            </div>
        </Container>
    );
}

export default Footer;