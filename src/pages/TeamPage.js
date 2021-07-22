import React, {useState}from "react";
import styled from "styled-components";
import {Header, BottomBar,Footer} from "../components/";
import {history} from "../redux/configureStore";
import gosumteam from "../shared/gosumteam.png";
import gosumteam2 from "../shared/gosumteam2.png";
import back from "../shared/back.png";
const TeamPage = () => {
    const [like,likeChange]=useState(0);
    return (
        <React.Fragment>
            <Header/>
            <About>
                <InnerAbout>
                <img margin = "5px" width= "100%"  src={gosumteam2} alt="gosumteam2"></img>
                <img width= "100%" src={gosumteam} alt="gosumteam"></img>


                <MT>[CloneCoding]<MobileBlock> Team13. NEWNEEK</MobileBlock></MT>
                <ST><span style={{color:"#fb7800"}}>Frontend</span> : 👩‍🦱이동민🤹‍♂️최수임  
                <MobileBlock> <span style={{color:"#fb7800"}}>Backend</span> : 👧김예지🧑박진홍👩윤송</MobileBlock></ST>
                </InnerAbout>
            <img width= "50%" src={back} alt="back"></img>
            </About>
            <BottomBar/>

        </React.Fragment>
            );
};

export default TeamPage;
        
const About =styled.section`
    margin: 2rem auto;
    @media (max-width: 2000px){
        max-width: 720px;}
    `;
const InnerAbout =styled.div`
    margin: 0 1rem;
    `;

const MT = styled.p`
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: 4px;
    `;
const ST = styled.p`
    font-size:1.5rem;
    font-weight:700;
    margin-bottom:50px;
    letter-spacing: 1.5px;
    @media (max-width: 700px) {
        letter-spacing: 4px;
    }
`
const H2 =styled.h2`
    margin: .5rem 0 0;
    font-size: 3rem;
    font-weight: 900;

`;
const MobileBlock = styled.span`
    @media (max-width: 700px) {
        display: block;
        
    }
`;
