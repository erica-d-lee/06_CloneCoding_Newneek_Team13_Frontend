import React from "react";
import { Footer, Header, DetailContent } from "../components/";

const DetailNews = (props) => {
    return (
    <React.Fragment>
        <Header />
        <DetailContent/>
        <Footer />
    </React.Fragment>
    );
};

DetailNews.defaultProps = {
    
};


export default DetailNews;
