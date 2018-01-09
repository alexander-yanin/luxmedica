import React from "react";
// import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import config from "./../../config.js";

// import { closeModal } from "./actions";

export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal() {
        // this.props.actions.closeModal();
    }

    render() {
        const { isOpen } = this.props.modal;
        if (!isOpen) return null;
        console.log(this.props);
        return (
            <div className={`modal-overlay`}>
                <div className={`modal`}>
                    <label className={`modal-close`} onClick={this.handleCloseModal} icon={`${config.imagePath}/close.svg`} />
                    { this.props.children }
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         modal: state.modal
//     }
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         actions: bindActionCreators({closeModal}, dispatch)
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);
export default Modal;

// const Overlay = styled.div`
//     z-index: 5;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.5);
// `;
//
// const ModalWrapper = styled.div`
//     overflow-y: auto;
//     z-index: 10;
//     position: fixed;
//     min-width: 360px;
//     min-height: 401px;
//     max-height: 100%;
//     top: 50%;
//     left: 50%;
//     -webkit-transform: translate(-50%, -50%);
//     -moz-transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//     -o-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     background-color: #fff;
//     -webkit-box-shadow: 0px 1px 15px 5px rgba(0, 0, 0, .4);
//     -moz-box-shadow: 0px 1px 15px 5px rgba(0, 0, 0, .4);
//     box-shadow: 0px 1px 15px 5px rgba(0, 0, 0, .4);
//
//     &::-webkit-scrollbar-thumb {
//         background-color: #fa1756;
//         outline: 1px solid slategrey;
//     }
//
//     &::-webkit-scrollbar {
//         width: 3px;
//     }
//
//     &::-webkit-scrollbar-track {
//         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
//     }
// `;
//
// const ModalCloseButton = styled.label`
//     z-index: 10;
//     position: absolute;
//     right: 13px;
//     top: 13px;
//     width: 16px;
//     height: 16px;
//     background-image: url(${props => props.icon});
//     cursor: pointer;
// `;