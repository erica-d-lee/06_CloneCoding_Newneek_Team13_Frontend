import React from "react";
import { Footer, Header, DetailContent,BottomBar} from "../components/";


const DetailNews = (props) => {
    return (
    <React.Fragment>
        <Header />
        <DetailContent/>
        <Footer />
        <BottomBar/>
    </React.Fragment>
    );
};

DetailNews.defaultProps = {
    
};


export default DetailNews;
