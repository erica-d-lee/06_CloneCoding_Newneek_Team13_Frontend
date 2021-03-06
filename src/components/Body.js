import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {CardList, Category, Economy} from './';
import {Menu} from '../elements';

const Body = (props) => {
    const url = window.location.pathname;
    const url_category = url.split('/category/')[1];
    const [main, setMain] = useState(false);
    const category_obj = {
        'stayhome': 'π  μ§μ½',
        'politics': 'βοΈ κ΅­λ΄μ μΉ',
        'world': 'π μΈκ³',
        'tech': 'π€ νν¬',
        'economy': 'π° κ²½μ ',
        'labor-work': 'πͺ λΈλ/μΌ',
        'environment': 'π³ νκ²½',
        'women': 'π§ μ¬μ±',
        'covid-19': 'π· μ½λ‘λ19'
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