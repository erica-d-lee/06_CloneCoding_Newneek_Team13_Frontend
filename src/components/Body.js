import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {CardList, Category, Economy} from './';
import {Menu} from '../elements';

const Body = (props) => {
    const url = window.location.pathname;
    const url_category = url.split('/category/')[1];
    const [main, setMain] = useState(false);
    const category_obj = {
        'stayhome': '🏠 집콕',
        'politics': '⚖️ 국내정치',
        'world': '🌐 세계',
        'tech': '🤖 테크',
        'economy': '💰 경제',
        'labor-work': '💪 노동/일',
        'environment': '🌳 환경',
        'women': '🧑 여성',
        'covid-19': '😷 코로나19'
    };
    const category = category_obj[url_category]
    useEffect(() => {
        if (url === '/') {
            setMain(true);
        }
    }, []);

    return (
        <React.Fragment>
            <Category/>
            <HomeRecent>
                {
                    main
                        ? ''
                        : <div
                                style={{
                                    padding: '4rem 0 2rem 0'
                                }}>
                                <Menu
                                    name={`${category}`}
                                    large="large"
                                    fontWeight='400'
                                    lineHeight='1.4'
                                    wordBreak='keep-all'/>
                            </div>
                }
                <CardList category={category}/>
            </HomeRecent>
            <Economy/>
        </React.Fragment>
    )
};

const HomeRecent = styled.section `
    width: 90%;
    max-width: 1360px;
    margin: -3px auto 0px;
    padding: 0px 5%;
    position: relative;
    @media (max-width: 1360px) {
        max-width: 1040px;
        display: block;
    }
`;

export default Body;