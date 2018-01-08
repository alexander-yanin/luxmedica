import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactTouchEvents from "react-touch-events";
import { connect } from "react-redux";

import config from "./../../../config.js";
import Card from "./Card";
import Circle from "../../../components/Circle";


export class Shares extends React.Component {
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
            if (current >= this.props.stocks.length-1) {
                return this.setCurrent(0);
            }
            this.setCurrent(current+1);
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.autoSlide);
    }

    renderSlides() {
        return this.props.stocks.map((item, index) => (
            <Link key={index}
                  to={`/about/shares/${item.id}`}>
                <Card card={item} />
            </Link>
        ));
    }

    renderCircles() {
        const { current } = this.state;
        return this.props.stocks.map((item, index) => (
            <Circle
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
        } else if (current > this.props.stocks.length-1) {
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
            <SharedWrapper>
                <AlignCenter>
                    <Header>Быть здоровым выгодно!</Header>
                    <Slider>
                        <ReactTouchEvents
                            onTap={ this.handleTap }
                            onSwipe={ this.handleSwipe }
                        >
                            <Slides marginLeft={marginLeft}>
                                {this.renderSlides()}
                            </Slides>
                        </ReactTouchEvents>
                        <Circles>
                            {this.renderCircles()}
                        </Circles>
                        <Link className={`all-share-link`} to={`/about/shares`}>Все акции</Link>
                    </Slider>
                </AlignCenter>
            </SharedWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        stocks: state.home.stocks
    }
};

export default connect(mapStateToProps, {})(Shares);

const SharedWrapper = styled.section`
    display: -webkit-box; 
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex; 
    display: flex;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    height: 420px;
    background: #f9f9f9;
`;

const AlignCenter = styled.div`
    display: -webkit-box; 
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex; 
    display: flex;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    min-width: 320px;
    max-width: 736px;
    height: inherit;
`;

const Header = styled.h3`
    font-family: ProximaNova;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #2f223a;
    margin: 20px 0 21px;
`;

const Slider = styled.div`
    position: relative;
    width: 100%;
    height: inherit;
    overflow: hidden;
    
    .all-share-link {
        position: absolute;
        bottom: 30px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        font-family: PFAgoraSlabPro;
        font-size: 14px;
        color: #2f223a;
        width: 100px;
        height: 32px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        border-radius: 30px;
        border: solid 1px #2f223a;
        background-color: transparent;
        color: #2f223a;
        text-decoration: none;
        text-align: center;
        line-height: 35px;
    }
`;

const Slides = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: -webkit-box; 
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex; 
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    width: 100%;
    height: inherit;
    -webkit-transform: translateX(${props => props.marginLeft}%);
    -moz-transform: translateX(${props => props.marginLeft}%);
    -o-transform: translateX(${props => props.marginLeft}%);
    -ms-transform: translateX(${props => props.marginLeft}%);
    transform: translateX(${props => props.marginLeft}%);
    white-space: nowrap;
    font-size: 0;
    transition: all 1s;
    
    a {
        width: 100%;
        position: relative;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        height: inherit;
        text-decoration: none;
    }
`;

const Circles = styled.div`
    position: absolute;
    display: -webkit-box; 
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex; 
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    bottom: 80px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
`;