import React from "react";
import "./style.scss";

import Carousel from "libs/carousel";


export const BannerSlider = props => {
    let settings = {
        className: `carousel`
    };
    return (
        <Carousel {...settings}>
            <div className="carousel-slide">1</div>
            <div className="carousel-slide">2</div>
            <div className="carousel-slide">3</div>
        </Carousel>
    );
};

export default BannerSlider;