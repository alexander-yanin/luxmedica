import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ReactTouchEvents from "react-touch-events";
// import styled from "styled-components";
import "./style.scss";
import { connect } from "react-redux";

import isMobile from "libs/userAgent";
import Card from "desktop/components/core/stock/card";
import Arrow from "desktop/components/core/slider-component/arrow";
import Circle from "desktop/components/core/slider-component/circle";
import ReactLuxButton from "desktop/components/core/button/lux-button/react-lux-button";


export class Share extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: !isMobile.any() ? 2 : 0,
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

    componentWillMount() {
        this.autoSlide = setInterval(() => {
            let { current } = this.state;
            if (current >= this.props.stocks.length-1) {
                return this.setCurrent(!isMobile.any() ? 2 : 0);
            }
            this.setCurrent(current+1);
        }, 100000);
    }

    componentWillUnmount() {
        clearInterval(this.autoSlide);
    }

    renderSlides() {
        return this.props.stocks.map((item, index) => (
            <Link className={`${isMobile.any() ? "mobile" : ""}`} to={`about/shares/${item.id}`} key={index}>
                <Card stock={item}/>
            </Link>
        ));
    }

    renderCircles() {
        const { current } = this.state;
        return this.props.stocks.map((item, index) => (
            <Circle
                className={`mobile`}
                setCurrent={() => this.setCurrent(index)}
                index={index}
                active={current === index ? true : null}
                key={index}
            />
        ));
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

    setCurrent(current) {
        if (current < !isMobile.any() ? 2 : 0) {
            return this.shake(!isMobile.any() ? -30 : -10);
        } else if (current > this.props.stocks.length-1) {
            return this.shake(!isMobile.any() ? 30 : 10);
        }
        this.setState({current});
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
        const marginLeft = !isMobile.any() ? -((current-2) * 390 + this.state.offset) : -(current * 100 + this.state.offset);
        return (
            <div className={`share-slider-wrapper ${isMobile.any() ? "mobile" : ""}`}>
                <div className={`share-slider-content-wrapper`}>
                    <div className={`share-slider-content`}>
                        <div className={`share-slider-header`}>
                            <h3>Быть здоровым выгодно!</h3>
                            {!isMobile.any() ? <ReactLuxButton text={`Все акции`} href={`/about/shares`} style={{width: `164px`, height: `58px`}}/> : null}

                        </div>
                        <ReactTouchEvents onTap={ this.handleTap }
                                          onSwipe={ this.handleSwipe }>
                            <div className={`share-slider-slides`} style={{transform: `translateX(${marginLeft}${!isMobile.any() ? "px" : "%"})`}}>
                                { this.renderSlides() }
                            </div>
                        </ReactTouchEvents>
                    </div>
                    {
                        isMobile.any() ?
                            <div className={`stock-slider-circles`}>
                                {this.renderCircles()}
                            </div> :
                            null
                    }
                    {isMobile.any() ? <ReactLuxButton className={`stock-slider-btn`} text={`Все акции`} href={`/about/shares`}/> : null}
                    {
                        !isMobile.any() ?
                            <Fragment>
                                <Arrow
                                    handleArrow={this.handleLeftArrow}
                                    direction={`left`}
                                    top={`47%`}
                                    side={`-75`}
                                />
                                <Arrow
                                    handleArrow={this.handleRightArrow}
                                    direction={`right`}
                                    top={`47%`}
                                    side={`-75`}
                                />
                            </Fragment> :
                            null
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stocks: state.home.stocks
    }
};

export default connect(mapStateToProps, {})(Share);
