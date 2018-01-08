import React, { Fragment } from "react";
import "./style.scss";
// import styled from "styled-components";
import { connect } from "react-redux";

import isMobile from "libs/userAgent";
import Card from "desktop/components/core/doctor/card";
import Arrow from "desktop/components/core/slider-component/arrow";
import Circle from "desktop/components/core/slider-component/circle";
import LuxButton from "desktop/components/core/button/lux-button/lux-button";


export class Doctors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            offset: 0
        };
        this.renderSlides = this.renderSlides.bind(this);
        this.renderCircles = this.renderCircles.bind(this);
        this.setCurrent = this.setCurrent.bind(this);
        this.handleLeftArrow = this.handleLeftArrow.bind(this);
        this.handleRightArrow = this.handleRightArrow.bind(this);
    }

    renderSlides() {
        let style = isMobile.any() ? {textDecoration: "none", display: "block", flexShrink: "0", width: "100%"} : {};
        return this.props.doctors.map((doctor, index) => (
            <a style={{textDecoration: "none", ...style}} key={index} href={`http://luxmedica.ru/doctor/${doctor.id}`}>
                <Card className={`${isMobile.any() ? "mobile" : ""}`} doctor={doctor}/>
            </a>
        ));
    }

    renderCircles() {
        const { current } = this.state;
        let slides = !isMobile.any() ? this.props.doctors.slice(this.props.doctors.length/2) : this.props.doctors
        return slides.map((item, index) => (
            <Circle
                className={`${isMobile.any() ? "mobile" : ""}`}
                setCurrent={() => this.setCurrent(index)}
                index={index}
                active={current === index ? true : null}
                key={index}
            />
        ));
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
        let diff = !isMobile.any() ? (this.props.doctors.length/2) : this.props.doctors.length;
        if (current < 0) {
            return this.shake(-15);
        } else if (current > Math.ceil(diff)-1) {
            return this.shake(15);
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
        const marginLeft = -((current) * 100 + this.state.offset);
        return (
            <section className={`doctor-slider ${isMobile.any() ? "mobile" : ""}`}>
                <div className={`doctor-slider-content-wrapper`}>
                    <div className={`doctor-slider-content`}>
                        <div className={`doctor-slider-header`}>
                            <div>
                                <h3>Вы в надёжных руках</h3>
                                {!isMobile.any() ? <label>В нашей команде работают только лучшие специалисты в своей области</label> : null}
                            </div>
                            {!isMobile.any() ? <LuxButton className={`doctor-slider-btn`} text={`Все врачи`} href={`http://luxmedica.ru/doctor`}/> : null}
                        </div>
                        <div className={`doctor-slider-list`} style={{transform: `translateX(${marginLeft}%)`}}>
                            { this.renderSlides() }
                        </div>
                    </div>
                    {
                        !isMobile.any() ?
                            <Fragment>
                                <Arrow
                                    handleArrow={this.handleLeftArrow}
                                    direction={`left`}
                                    side={`-75`}
                                    top={`50%`}
                                />
                                <Arrow
                                    handleArrow={this.handleRightArrow}
                                    direction={`right`}
                                    side={`-75`}
                                    top={`50%`}
                                />
                            </Fragment> :
                            null
                    }
                    <div className={`doctor-slider-circles`}>
                        { this.renderCircles() }
                    </div>
                    {isMobile.any() ? <LuxButton className={`doctor-slider-btn`} text={`Все врачи`} href={`http://luxmedica.ru/doctor`} /> : null}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        doctors: state.home.doctors
    }
};

export default connect(mapStateToProps, {})(Doctors);


// const ShareWrapper = styled.section`
//     position: relative;
//     display: block;
//     width: 100%;
//     height: 500px;
//     background-color: #f9f9f9;
// `;

// const ContentWrapper = styled.div`
//     position: relative;
//     max-width: 1140px;
//     height: 100%;
//     margin: 0 auto;
// `;

// const Content = styled.div`
//     position: relative;
//     max-width: 1140px;
//     margin: 0 auto;
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
//     overflow: hidden;
// `;

// const Header = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     -webkit-justify-content: space-between;
//     justify-content: space-between;
//     -webkit-align-items: center;
//     align-items: center;
//     margin: 51px 0 58px 0;
//
//     & h3 {
//         margin: 0 0 18px;
//         padding: 0;
//         font-family: ProximaNova;
//         font-size: 36px;
//         font-weight: bold;
//         text-align: left;
//         color: #2f223a;
//     }
//
//     & label {
//         font-family: PFAgoraSlabPro;
//         font-size: 18px;
//         text-align: left;
//         color: #2f223a;
//     }
//
//     a {
//         width: 164px;
//         height: 58px;
//         -webkit-border-radius: 100px;
//         -moz-border-radius: 100px;
//         border-radius: 100px;
//         border: solid 1px #2f223a;
//         background-color: transparent;
//         line-height: 55px;
//         text-align: center;
//         text-decoration: none;
//         color: #2f223a;
//     }
// `;

// const Slides = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     white-space: nowrap;
//     font-size: 0;
//     transition: all 1s;
//     position: relative;
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
//     -webkit-transform: translateX(${props => props.marginLeft}%);
//     -moz-transform: translateX(${props => props.marginLeft}%);
//     -ms-transform: translateX(${props => props.marginLeft}%);
//     -o-transform: translateX(${props => props.marginLeft}%);
//     transform: translateX(${props => props.marginLeft}%);
// `;

// const Circles = styled.div`
//     position: absolute;
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     bottom: 24px;
//     left: 50%;
// `;