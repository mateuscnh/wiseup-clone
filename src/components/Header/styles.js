import styled, { keyframes } from 'styled-components';

const MobMenuAnimate = keyframes`
    from{
        height: 0;
    }
`

export const Container = styled.div`
    position: fixed;

    width: 100%;
    height: 80px;

    background-color: ${props => props.theme.colors.background_primary};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        padding: 27px 0;
    }

    img + img{
        cursor: pointer;
    }
`;

export const MobMenu = styled.div`
    position: fixed;

    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background_primary};

    animation: ${MobMenuAnimate} .2s linear;

    ul{
        margin: 0 auto;
        padding: 6px;

        max-width: 420px;
        list-style: none;

        li{
            margin: 30px 0;
            font-size: 1.2rem;

            position: relative;

            transition: .2s;

            ::before{
                position: absolute;
                bottom: -8px;

                content: ' ';

                width: 0;
                height: 4px;

                border-radius: 10px;

                transition: .2s;
                
                background-color: ${props => props.theme.colors.secondary};
            }

            :hover a{
                color: ${props => props.theme.colors.secondary};    
            }

            :hover::before{
                width: 30%;
            }
        }
    }

`

// .selected{
//     color: ${props => props.theme.colors.secondary};

//     ::before{
//         position: absolute;
//         bottom: -8px;

//         content: ' ';

//         width: 30%;
//         height: 4px;

//         border-radius: 10px;

//         transition: .2s;

//         background-color: ${props => props.theme.colors.secondary};
//     }
// }

