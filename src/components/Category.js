import React from "react";
import styled from "styled-components";
import {Menu} from '../elements';
import {history} from '../redux/configureStore';

const Category = () => {
    const url = window.location.pathname.substring(1);
    const title_list = [{'url': '', 'title': 'μ μ²΄'}, {'url': 'category/stayhome', 'title': 'π μ§μ½'}, {'url': 'category/politics', 'title': 'βοΈκ΅­λ΄μ μΉ'}, {'url': 'category/world', 'title': 'πμΈκ³'}, {'url': 'category/tech', 'title': 'π€νν¬'}, {'url': 'category/economy', 'title': 'π°κ²½μ '}, {'url': 'category/labor-work', 'title': 'πͺλΈλ/μΌ'}, {'url': 'category/environment', 'title': 'π³νκ²½'}, {'url': 'category/women', 'title': 'π§μ¬μ±'}, {'url': 'category/covid-19', 'title': 'π·μ½λ‘λ19'}];

    return (
    <Div>
        <nav className='category' style={{marginTop: '-1px', display: 'flex', justifyContent: 'center', borderTop: '1px solid #161616', borderBottom: '1px solid #161616', backgroundColor: '#fff', boxSizing: 'border-box', overflow: 'hidden', position: 'absolute', left: 0, right: 0}}>
            <div className='category-inner' style={{display: 'flex', whiteSpace: 'nowrap', overflow: 'overlay', marginBottom: '1px'}}>
                {title_list.map(function(item, idx) {
                    if (url === item.url) {
                        return (<A className='category-link' key={idx} onClick={() => {
                            history.push(`/${item.url}`);}} style={{borderBottom: '3px solid #000', paddingTop: '20px'}}><Menu name={item.title} /></A>)
                    } else {
                        return (<A className='category-link' key={idx} onClick={() => {
                            history.push(`/${item.url}`);}}><Menu name={item.title} /></A>)
                    }})}
            </div>
        </nav>
        <CategoryBackdrop />
    </Div>
    );
};

Category.defaultProps = {

}

const Div = styled.div`
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
`;

const A = styled.a`
    display: flex;
    justify-content: center;
    margin: 0 1rem 0 1rem;
    padding: 1.25rem 0 1.25rem 0;
    box-sizing: border-box;
    font-size: 1.125rem;
    cursor: pointer;
    align-items: center;
    @media (max-width: 1080px) {
        margin: 0 1rem 0 1rem;
        padding: 1rem 0 1rem 0;
    }
    &:hover {
        color: #fb7800;
    }
`;

const CategoryBackdrop = styled.div `
    height: 67px;
    @media (max-width: 1080px) {
        height: 52px;
    }
`;

export default Category;