import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import isMobile from "libs/userAgent";
import LuxButton from "desktop/components/core/button/lux-button/lux-button";
// import { openModal } from "./../../../components/modal/actions";
// import Modal from "./../../../components/modal/Modal";
// import ContentModal from "./ContentModal";


export class Sale extends React.Component {
    constructor(props) {
        super(props);
        // this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    // handleOpenModal() {
    //     this.props.actions.openModal('quiz/get-question');
    // }

    render() {
        return (
            <section className={`sale-banner ${isMobile.any() ? "mobile" : ""}`}>
                {/*<Modal>*/}
                    {/*<ContentModal/>*/}
                {/*</Modal>*/}
                <h3>Персональная карта парковки в подарок</h3>
                {!isMobile.any() ? <p>Ответьте на один вопрос и получите карту парковки</p> : null}
                <LuxButton text={`Заполнить анкету`} className={`sale-banner-btn light`}/>
            </section>
        );
    }
}

// const mapStateToProps = state => {
//     return {};
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         actions: bindActionCreators({openModal}, dispatch)
//     }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Sale);
export default Sale;

// const SaleWrapper = styled.section`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: column;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -webkit-align-items: center;
//     align-items: center;
//     width: 100%;
//     min-height 300px;
//     -webkit-background-image: linear-gradient(170deg, #42364f 30%, #fa1e55);
//     -o-background-image: linear-gradient(170deg, #42364f 30%, #fa1e55);
//     -moz-background-image: linear-gradient(170deg, #42364f 30%, #fa1e55);
//     background-image: linear-gradient(170deg, #42364f 30%, #fa1e55);
//
//     h3 {
//         margin: 45px 50px 0;
//         font-family: ProximaNova;
//         font-size: 48px;
//         font-weight: bold;
//         text-align: center;
//         color: #ffffff;
//     }
//
//     button {
//         width: 206px;
//         height: 58px;
//         margin: 10px 0;
//         -webkit-border-radius: 30px;
//         -moz-border-radius: 30px;
//         border-radius: 30px;
//         border: solid 2px #ffffff;
//         background: transparent;
//         font-family: PFAgoraSlabPro;
//         font-size: 18px;
//         font-weight: bold;
//         color: #ffffff;
//         outline: none;
//         cursor: pointer;
//     }
// `;
//
// const Paragraph = styled.p`
//     margin: 20px 0;
//     font-family: PFAgoraSlabPro;
//     font-size: 24px;
//     line-height: 1.38;
//     text-align: left;
//     color: #ffffff;
// `;