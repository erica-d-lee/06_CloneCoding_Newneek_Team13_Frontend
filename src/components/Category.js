import React from "react";
import styled from "styled-components";
import {Menu} from '../elements';

const Category = () => {
    return (
    <React.Fragment>
        <nav className='category' style={{marginTop: '-1px', display: 'flex', justifyContent: 'center', borderTop: '1px solid #161616', borderBottom: '1px solid #161616', backgroundColor: '#fff', boxSizing: 'border-box', overflow: 'hidden', position: 'absolute', left: 0, right: 0}}>
            <div className='category-inner' style={{display: 'flex', whiteSpace: 'nowrap', overflow: 'overlay', marginBottom: '1px'}}>
                <A className='category-link'>전체</A>
                <A className='category-link'><Menu emoji='⚖️' name='국내정치' hover='color: #fb7800;'/></A>
                <A className='category-link'><Menu emoji='🌐' name='세계' hover='color: #fb7800;'/></A>
                <A className='category-link'><Menu emoji='🤖' name='테크' hover='color: #fb7800;'/></A>
                <A className='category-link'><Menu emoji='💰' name='경제' hover='color: #fb7800;'/></A>
                <A className='category-link'><Menu emoji='💪' name='노동·일' hover='color: #fb7800;'/></A>
                <A className='category-link'><Menu emoji='🌳' name='환경' hover='color: #fb7800;'/></A>
                <A className='category-link'><Menu emoji='🧑' name='여성' hover='color: #fb7800;'/></A>
                <A className='category-link'><Menu emoji='😷' name='코로나19' hover='color: #fb7800;'/></A>
            </div>
        </nav>
        <CategoryBackdrop />
    </React.Fragment>
    );
};

Category.defaultProps = {
    
};

const A = styled.a`
    display: flex;
    justify-content: center;
    margin: 0 1rem 0 1rem;
    padding: 1.25rem 0 1.25rem 0;
    box-sizing: border-box;
    font-size: 1.1254rem;
    cursor: pointer;
    align-items: center;
    @media (max-width: 1080px) {
        margin: 0 1rem 0 1rem;
        padding: 1rem 0 1rem 0;
    }
    &:hover {
        color: #fb7800;
    }
    &:active {
        border-bottom: 3px solid #000;
    }
`;

const CategoryBackdrop = styled.div`
    height: 67px;
    @media (max-width: 1080px) {
        height: 52px;
    }
`;

export default Category;