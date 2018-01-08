import React from "react";
// import styled from "styled-components";
import SlideContent from "./slide-content";


export class Slide extends React.Component {
    render() {
        return (
            <div className={`banner-slide`}>
                <img className={`banner-slide-image`} src={this.props.slide.imagePath} alt=""/>
                <div className={`content-wrapper`}>
                    <SlideContent slide={this.props.slide} />
                </div>
            </div>
        );
    }
}

export default Slide;


// const SlideWrapper = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     display: inline-block;
//     -webkit-background-image: url(${props => props.img});
//     -o-background-image: url(${props => props.img});
//     -moz-background-image: url(${props => props.img});
//     background-image: url(${props => props.img});
//     -webkit-background-size: cover;
//     -o-background-size: cover;
//     -moz-background-size: cover;
//     background-size: cover;
//     background-position: center center;
// `;

// const Banner = styled.img`
//     z-index: 0;
//     position: absolute;
//     right: 0;
//     top: 0;
//     max-width: 50%;
//     height: 100%;
// `;

// const ContentWrapper = styled.div`
//     position: relative;
//     width: 1140px;
//     height: 100%;
//     margin: 0 auto;
// `;