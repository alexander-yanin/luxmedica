import React from "react"
// import { touchEventStart, touchEventMove, touchEventEnd } from "libs/carousel/touch-controller";


export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touch: null,
            delta: 0,
            currentSlide: 0
        };
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.setCurrent = this.setCurrent.bind(this);
    }

    handleTouchStart(e) {
        this.setState({
            detecting: true,
            touch: e.type === "mousedown" ? e.screenX : e.changedTouches[0]
        });
    }

    handleTouchMove(e) {
        console.log(e.type);
        if ((this.state.currentSlide === this.props.children.length-1 && (this.state.touch.pageX - e.changedTouches[0].pageX) > 0) || this.state.currentSlide === 0 && (this.state.touch.pageX - e.changedTouches[0].pageX) < 0) return;
        this.setState({delta: (this.state.currentSlide*100) + (this.state.touch.pageX - e.changedTouches[0].pageX) / 5})
    }

    handleTouchEnd(e) {
        if (this.state.touch.pageX - e.changedTouches[0].pageX > 100) {
            this.setCurrent(this.state.currentSlide+1);
        } else if (this.state.touch.pageX - e.changedTouches[0].pageX < -100)  {
            this.setCurrent(this.state.currentSlide-1);
        } else {
            this.setCurrent(this.state.currentSlide);
        }
    }

    setCurrent(currentSlide) {
        if (currentSlide > this.props.children.length-1 || currentSlide < 0) {
            return;
        }
        this.setState({currentSlide, delta: currentSlide*100})
    }

    render() {
        console.log(this.state.currentSlide);
        let setting = {
            transition: `transform 100ms linear`,
            transform: `translate3d(-${this.state.delta}%, 0, 0)`
        };

        return (
            <div {...this.props}>
                <div className={`carousel-list`}
                     style={setting}
                     onMouseDown={this.handleTouchStart}
                     onTouchStart={this.handleTouchStart}
                     onTouchMove={this.handleTouchMove}
                     onTouchEnd={this.handleTouchEnd}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Carousel;