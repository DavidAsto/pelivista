import React from "react";
import Banner from "../components/banner/banner";
import Estrenos from "../components/estrenos/estrenos";
import Series from "../components/top-series/top-series";


const Body = () => {
    return(
        <>
        <Banner></Banner>
        <Estrenos></Estrenos>
        <Series></Series>
        </>
    )
}

export default Body