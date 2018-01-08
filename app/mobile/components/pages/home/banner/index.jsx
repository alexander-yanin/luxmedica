import React from "react";
import "./style.scss";
// import styled from "styled-components";
import ReactTouchEvents from "react-touch-events";
import { connect } from "react-redux";

// import config from "./../../../config.js";
import Slide from "./slide";
import Circle from "desktop/components/core/slider-component/circle";


export class MobBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            offset: 0
        };

        this.autoSlide = null;

        this.renderSlides = this.renderSlides.bind(this);
        this.renderCircles = this.renderCircles.bind(this);
        this.setCurrent = this.setCurrent.bind(this);
        this.handleLeftArrow = this.handleLeftArrow.bind(this);
        this.handleRightArrow = this.handleRightArrow.bind(this);
        this.handleTap = this.handleTap.bind(this);
        this.handleSwipe = this.handleSwipe.bind(this);
    }

    componentDidMount() {
        this.autoSlide = setInterval(() => {
            let { current } = this.state;
            if (current >= this.props.slides.length-1) {
                return this.setCurrent(0);
            }
            this.setCurrent(current+1);
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.autoSlide);
    }

    renderSlides() {
        return this.props.slides.map((item, index) => (
            <Slide
                key={index}
                slide={item}
            />
        ));
    }

    renderCircles() {
        const { current } = this.state;
        return this.props.slides.map((item, index) => (
            <Circle
                className={`mobile`}
                setCurrent={() => this.setCurrent(index)}
                index={index}
                active={current === index ? true : null}
                key={index}
            />
        ));
    }

    setCurrent(current) {
        if (current < 0) {
            return this.shake(-10);
        } else if (current > this.props.slides.length-1) {
            return this.shake(10);
        }
        this.setState({current});
    }

    handleTap (e) {}

    handleSwipe (direction) {
        switch (direction) {
            case "left": this.handleRightArrow(); break;
            case "right": this.handleLeftArrow(); break;
        }
    }

    handleLeftArrow() {
        let { current } = this.state;
        this.setCurrent(current-1);
    }

    handleRightArrow() {
        let { current } = this.state;
        this.setCurrent(current+1);
    }

    shake(index) {
        this.setState({
            offset: index
        });
        setTimeout(() => {
            this.setState({
                offset: 0
            });
        }, 250);
    }

    render() {
        const { current, offset } = this.state;
        const marginLeft = -(current * 100 + offset);
        return(
            <div className={`mob-banner-slider-wrapper`}>
                <div className={`mob-banner-slider-centred`}>
                    <div className={`mob-banner-slider`}>
                        <ReactTouchEvents
                            onTap={ this.handleTap }
                            onSwipe={ this.handleSwipe }
                        >
                            <div className={`mob-banner-slide-list`} style={{transform: `translate3d(${marginLeft}%, 0, 0)`}}>
                                {this.renderSlides()}
                            </div>
                        </ReactTouchEvents>
                        <div className={`mob-banner-circles`}>
                            {this.renderCircles()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        slides: state.home.slides
    }
};

export default connect(mapStateToProps, {})(MobBanner);

// const SliderWrapper = styled.section`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: row;
//     -webkit-flex-direction: row;
//     flex-direction: row;
//     -webkit-justify-content: center;
//     justify-content: center;
//     width: 100%;
//     height: 427px;
// `;
//
// const AlignCenter = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: row;
//     -webkit-flex-direction: row;
//     flex-direction: row;
//     width: 100%;
//     min-width: 320px;
//     max-width: 736px;
//     height: inherit;
// `;
//
// const Slider = styled.div`
//     position: relative;
//     width: 100%;
//     height: inherit;
//     overflow-x: hidden;
// `;
//
// const Slides = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: row;
//     -webkit-flex-direction: row;
//     flex-direction: row;
//     width: 100%;
//     height: inherit;
//     -webkit-transform: translateX(${props => props.marginLeft}%);
//     -moz-transform: translateX(${props => props.marginLeft}%);
//     -o-transform: translateX(${props => props.marginLeft}%);
//     -ms-transform: translateX(${props => props.marginLeft}%);
//     transform: translateX(${props => props.marginLeft}%);
//     white-space: nowrap;
//     font-size: 0;
//     transition: all 1s;
// `;
//
// const Circles = styled.div`
//     position: absolute;
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: row;
//     -webkit-flex-direction: row;
//     flex-direction: row;
//     bottom: 30px;
//     left: 50%;
//     -webkit-transform: translateX(-50%);
//     -moz-transform: translateX(-50%);
//     -o-transform: translateX(-50%);
//     -ms-transform: translateX(-50%);
//     transform: translateX(-50%);
// `;