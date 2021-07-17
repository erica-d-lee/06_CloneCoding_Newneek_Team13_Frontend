import React from "react";
import styled from "styled-components";
import gosum from '../shared/aboutEconomy.png';
import {Text} from '../elements';

const Economy = () => {
    return (
        <React.Fragment>
            <HomeEconomy className='HomeEconomy'>
                <Figure className='Figure'>
                    <img src={gosum} style={{verticalAlign: 'middle', width: '100%', border: '0px'}} alt=''></img>
                </Figure>
                <Mangrove>
                    <Text value='고슴이는 경제초보에서 탈출할 수 있을까요?' fontColor='#000' fontWeight='500' span detailText />
                    <Arrow>
                        <Line></Line>
                    </Arrow>
                </Mangrove>
            </HomeEconomy>
        </React.Fragment>
    );
};

Economy.defaultProps = {
    
};

const HomeEconomy = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    border-top: 2px solid #000;
    background: #fb7800;
    position: relative;
    cursor: pointer;
    bottom: -3rem;
    &:hover {
        & > Figure {
            transition: all .4s ease .05s;
            transform : translateY(-1.05rem);
        }
    }
`;

const Figure = styled.figure`
    max-width: 340px;
    margin: -6rem 0 1rem 0;
    
    display: block;
`;

const Mangrove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid #161616;
    border-bottom: 1px solid #000;
    background: #fff;
    position: relative;
    top: -3rem;
`;

const Arrow = styled.div`
    max-width: 67px;
    flex-grow: 1;
    margin: 0 3px 0 11px;
    padding: 17px 0;
`;

const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #000;
    position: relative;
    display: block;
    &::before, &::after {
        background: inherit;
        position: absolute;
        width: 17px;
        height: 2px;
        content: '';
        right: 0;
    }
    &::before {
        transform: rotate(-50deg);
        transform-origin: top right;
    }
    &::after {
        transform: rotate(50deg);
        transform-origin: bottom right;
    }
`;


export default Economy ;