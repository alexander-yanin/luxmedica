import React from "react";
import "./style.scss";
// import styled from "styled-components";
import { connect } from "react-redux";

import Slide from "./slide";
import Circle from "desktop/components/core/slider-component/circle";
// import Arrow from "../../../components/slider/Arrow";



export class Slider extends React.Component {
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
    }

    componentDidMount() {
        this.autoSlide = setInterval(() => {
            let { current } = this.state;
            this.setCurrent(current+1);
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.autoSlide);
    }

    renderSlides() {
        return this.props.slides.map((slide, index) => (
            <Slide
                slide={slide}
                key={index}
            />
        ));
    }

    renderCircles() {
        const { current } = this.state;
        return this.props.slides.map((item, index) => (
            <Circle
                setCurrent={() => this.setCurrent(index)}
                index={index}
                active={current === index ? true : null}
                key={index}
            />
        ));
    }

    setCurrent(current) {
        if (current > this.props.slides.length-1) {
            return this.setState({current: 0});
        }
        this.setState({current});
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
        const { current } = this.state;
        const marginLeft = -(current * 100) + this.state.offset;
        return (
            <div className={`header-slider`}>
                <div className={`header-slider__slides`} style={{transform: `translateX(${marginLeft}%)`}}>
                    { this.renderSlides() }
                </div>
                {/*<div className={`header-slider__arrows`}>*/}
                {/*<Arrow*/}
                {/*handleArrow={this.handleLeftArrow}*/}
                {/*direction={`left`}*/}
                {/*side={`-75`}*/}
                {/*top={`40%`}*/}
                {/*/>*/}
                {/*<Arrow*/}
                {/*handleArrow={this.handleRightArrow}*/}
                {/*direction={`right`}*/}
                {/*side={`-75`}*/}
                {/*top={`40%`}*/}
                {/*/>*/}
                {/*</div>*/}
                <div className={`header-slider__circles`}>
                    { this.renderCircles() }
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

export default connect(mapStateToProps, {})(Slider);