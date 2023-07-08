import React from "react";
import ReactDOM from "react-dom";
import Button from "../Input/Button";
import classes from "./ErrorModal.module.css";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onOkay}></div>;

}

const ModalOverlay = props => {
    return (
        <div className= {classes['modal-overlay']}>
            <div className= {classes.modal}>
                <div className={classes['modal-title']}>
                    <h2>Invalid input</h2>
                </div>
                <div className={classes['modal-body']}>
                    <p>{props.errMsg}</p>
                </div>
                <div className={classes['modal-btn']}>
                    <Button text = {"Okay"} onButtonClick = {props.onOkay} />
                </div>
            </div>
        </div>
    );
}

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onOkay={props.onOkay}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay errMsg={props.errMsg} onOkay={props.onOkay}/>, document.getElementById('overlay-root'))}
        </>
    );
}

export default ErrorModal;