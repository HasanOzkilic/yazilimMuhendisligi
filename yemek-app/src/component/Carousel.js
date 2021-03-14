import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel  from 'react-elastic-carousel';

import KitchenItem from "./KitchenItem"
import "./style/Carousel.css"



function Collapses() {
    const breakPoints =[
        {width:500,itemsToShow:1},
        {width:768,itemsToShow:2},
        {width:1200,itemsToShow:3},
        {width:1500,itemsToShow:4},
    ]
    return (
        <div className="carousel">
        <div className="kitchenType">
        <span>
        Mutfak
        </span>
        
        </div>
            <div className="carouselContainer">
            <Carousel breakPoints={breakPoints}>
            <KitchenItem/>
            <KitchenItem/> 
            <KitchenItem/>
             <KitchenItem/>


            </Carousel>
       






            </div>



        </div>

    )
}





export default Collapses
